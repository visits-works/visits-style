/* eslint-disable no-param-reassign, no-unused-expressions */
import React, {
  Children, cloneElement, useState, HTMLAttributes, useEffect, useRef,
  forwardRef, useImperativeHandle, useCallback,
} from 'react';
import { styled } from 'styled-components';
import {
  useFloating, useInteractions, useClick, useId,
  shift, offset as offsetUi, flip, FloatingOverlay, autoUpdate,
} from '@floating-ui/react';
import type { Placement } from '@floating-ui/core';

import Portal from '../Portal';
import Box from '../../elements/Box';
import stopPropagation from '../../utils/stopPropagation';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  /** ボタンの内容 */
  label: React.ReactElement;
  /** 内容のリスト */
  children?: React.ReactNode;
  /**
   * 吹き出しの背景色
   * @default 'background'
   */
  color?: string;
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
  onClose?: (e?: Event) => void;
  /** 開けた場合のコールバック */
  onOpen?: (e?: Event) => void;
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

export interface PopoverRef {
  open: () => void;
  close: () => void;
}

const Popover = forwardRef(({
  position, label, children, color = 'background',
  onOpen, onClose, disabled, offset = { x: 0, y: 6 }, onManualClose,
  zIndex = 9996, ...rest
}: Props, ref: React.Ref<PopoverRef>) => {
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
    onOpenChange: (value, e) => {
      if (value) {
        openRef.current?.(e);
      } else {
        closeRef.current?.(e);
      }
      setOpen(value);
    },
    whileElementsMounted: autoUpdate,
  });

  const handleBlur = useCallback((e?: React.MouseEvent<HTMLElement>) => {
    stopPropagation(e);
    if (onManualClose) return onManualClose();
    setOpen(false);
  }, [onManualClose]);

  useEffect(() => {
    if (disabled && open) {
      setOpen(false);
    }
  }, [disabled, open]);

  useImperativeHandle(ref, () => ({
    open: () => setOpen(true),
    close: () => setOpen(false),
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
      <Portal>
        {open && !disabled ? (
          <FloatingOverlay data-testid="visits-style-shadow" onClick={handleBlur} style={{ zIndex }}>
            <Tooltip
              role="tooltip"
              ref={refs.setFloating}
              color={color}
              style={floatingStyles}
              {...getFloatingProps({ ...rest, onClick: stopPropagation })}
            >
              {children}
            </Tooltip>
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
