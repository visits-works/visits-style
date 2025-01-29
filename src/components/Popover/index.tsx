/* eslint-disable no-param-reassign, no-unused-expressions */
import React, {
  Children, cloneElement, useState, HTMLAttributes, useEffect, useRef,
  forwardRef, useImperativeHandle, useCallback,
  RefObject,
} from 'react';
import { styled } from 'styled-components';
import {
  useFloating, useInteractions, useClick, useId,
  shift, offset as offsetUi, flip, FloatingOverlay, autoUpdate,
  type ReferenceType,
} from '@floating-ui/react';
import type { Placement } from '@floating-ui/core';

import Portal from '../Portal';
import Box from '../../elements/Box';
import stopPropagation from '../../utils/stopPropagation';

export interface PopoverRef {
  open: () => void;
  close: () => void;
}
export interface Props extends HTMLAttributes<HTMLDivElement> {
  /** ボタンの内容 */
  label: React.ReactElement;
  /** 内容のリスト */
  children?: React.ReactNode;
  /**
   * 表示される場所
   * @default 'bottom-end'
   */
  position?: Placement;

  /**
   * ツールチップが表示される間隔
   * @default '{ x: 0, y: 6 }'
   */
  offset?: { x: number; y: number; };

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
}

const Popover = forwardRef<PopoverRef, Props>(({
  position, label, children, color = 'background', disabled, offset = { x: 0, y: 6 },
  onOpen, onClose, onManualClose, zIndex = 9996, ...rest
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

  const handleBlur = useCallback((e?: React.MouseEvent<HTMLElement>) => {
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
        disabled,
        onClick: stopPropagation,
      }))}
      <Portal disabled={disabled}>
        {open ? (
          <FloatingOverlay data-testid="vs-popover-shadow" onClick={handleBlur} style={{ zIndex }}>
            <div
              role="tooltip"
              ref={refs.setFloating}
              style={floatingStyles}
              {...getFloatingProps({ ...rest, onClick: stopPropagation })}
            >
              {children}
            </div>
          </FloatingOverlay>
        ) : null}
      </Portal>
    </>
  );
});
Popover.displayName = 'Popover';

export default Popover;

const Tooltip = styled(Box)`
  display: flex;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  padding: 0.5rem 0;
  width: auto;
  height: auto;
  cursor: auto;
  z-index: 20;
`;
