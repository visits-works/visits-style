/* eslint-disable no-param-reassign, no-unused-expressions */
import {
  Children, cloneElement, useState, useEffect, useRef,
  forwardRef, useImperativeHandle, useCallback, useMemo,
} from 'react';
import type { CSSProperties, HTMLAttributes, ReactElement, ReactNode, MouseEvent } from 'react';
import {
  useFloating, useInteractions, useClick, useId, useTransitionStyles,
  shift, offset as offsetUi, flip, FloatingOverlay, autoUpdate, type ReferenceType,
} from '@floating-ui/react';
import type { Placement } from '@floating-ui/core';
import clsx from 'clsx';

import Portal from '../Portal';
import stopPropagation from '../../utils/stopPropagation';

export interface PopoverRef {
  open: () => void;
  close: () => void;
}
export interface Props extends HTMLAttributes<HTMLDivElement> {
  /** ボタンの内容 */
  label: ReactElement;
  /** 内容のリスト */
  children?: ReactNode;
  /**
   * 表示される場所
   * @default 'bottom-end'
   */
  position?: Placement;

  /**
   * Popoverが表示される間隔
   * @default '{ x: 0, y: 6 }'
   */
  offset?: { x: number; y: number; };

  /**
   * Popoverの表示・非表示のアニメーション速度
   * @default { open: 150, close: 75 }
   */
  timeout?: number | { open: number; close: number; };

  /** 閉じた場合のコールバック */
  onClose?: (ref?: ReferenceType | null, float?: HTMLElement | null) => void;
  /** 開けた場合のコールバック */
  onOpen?: (ref?: ReferenceType | null, float?: HTMLElement | null) => void;
  /** popoverを閉じる処理を手動に設定します */
  onManualClose?: () => void;
  /** コンテンツを出さない */
  disabled?: boolean;
  /**
   * zIndexを指定する
   * @default 9996
  */
  zIndex?: number;
  /** デフォルトスタイルを外し、cssクラスを適用します */
  unstyled?: boolean;
}
const defaultTimeout = { open: 150, close: 75 };

const Popover = forwardRef<PopoverRef, Props>(({
  position, label, children, color = 'background', disabled, offset = { x: 0, y: 6 },
  onOpen, onClose, onManualClose, timeout = defaultTimeout, unstyled, zIndex = 9996, role, ...rest
}, ref) => {
  const [open, setOpen] = useState(false);
  const nodeId = useId();
  const openRef = useRef(onOpen);
  const closeRef = useRef(onClose);

  const { refs, floatingStyles, context } = useFloating({
    nodeId,
    placement: position,
    middleware: [
      shift(),
      flip({ fallbackAxisSideDirection: 'end' }),
      offsetUi({ mainAxis: offset.y, crossAxis: offset.x }),
    ],
    open,
    onOpenChange: (value) => {
      if (value) {
        openRef.current?.(refs.reference.current, refs.floating.current);
      } else {
        closeRef.current?.(refs.reference.current, refs.floating.current);
      }
      setOpen(value);
    },
    whileElementsMounted: autoUpdate,
  });

  const { isMounted, styles } = useTransitionStyles(context, {
    duration: timeout,
    initial({ side }) {
      let transform = '';
      if (side === 'top') {
        transform = 'translateY(5%) scale(0.95)';
      } else if (side === 'bottom') {
        transform = 'translateY(-5%) scale(0.95)';
      } else if (side === 'left') {
        transform = 'translateX(5%) scale(0.95)';
      } else {
        transform = 'translateX(-5%) scale(0.95)';
      }
      return { opacity: 0, transform };
    },
  });

  const handleBlur = useCallback((e?: MouseEvent<HTMLElement>) => {
    stopPropagation(e);
    if (onManualClose) return onManualClose();

    setOpen(false);
    closeRef.current?.(refs.reference.current, refs.floating.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onManualClose]);

  useEffect(() => {
    if (disabled && open) return setOpen(false);
  }, [disabled, open]);

  useImperativeHandle(ref, () => ({
    open: () => {
      setOpen(true);
      openRef.current?.(refs.reference.current, refs.floating.current);
    },
    close: () => {
      setOpen(false);
      closeRef.current?.(refs.reference.current, refs.floating.current);
    },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }), []);

  const { getFloatingProps, getReferenceProps } = useInteractions([
    useClick(context, { enabled: !disabled }),
  ]);

  openRef.current = onOpen;
  closeRef.current = onClose;

  return (
    <>
      {cloneElement(Children.only(label), getReferenceProps({
        ref: refs.setReference,
        tabIndex: 0,
        role: 'button',
        'aria-expanded': open,
        disabled,
        onClick: stopPropagation,
      }))}
      <Portal disabled={disabled || !isMounted}>
        <FloatingOverlay data-testid="vs-popover-shadow" onClick={handleBlur} style={{ zIndex }} autoFocus>
          <div role={role || 'region'} ref={refs.setFloating} style={floatingStyles}>
            <PopoverContent
              unstyled={unstyled}
              styles={styles}
              {...getFloatingProps({ ...rest, onClick: stopPropagation })}
            >
              {children}
            </PopoverContent>
          </div>
        </FloatingOverlay>
      </Portal>
    </>
  );
});
Popover.displayName = 'Popover';
export default Popover;

interface PopoverContentProps extends HTMLAttributes<HTMLDivElement> {
  styles: CSSProperties;
  unstyled?: boolean;
}

export const PopoverContent = forwardRef<HTMLDivElement, PopoverContentProps>(({
  className, unstyled, styles, style = {}, ...rest
}, ref) => {
  const popoverName = useMemo(() => clsx(
    'z-20 w-auto h-auto outline-none transition-transform ease-in-out',
    unstyled ? null : 'border border-accent rounded-md shadow-lg p-1 bg-background',
    className,
  ), [className, unstyled]);
  return <div ref={ref} className={popoverName} style={{ ...styles, ...style }} {...rest} />;
});
PopoverContent.displayName = 'PopoverContent';
