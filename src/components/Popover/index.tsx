/* eslint-disable no-param-reassign, no-unused-expressions */
import React, {
  Children, cloneElement, useState, HTMLAttributes, useEffect,
  forwardRef, useImperativeHandle,
} from 'react';
import styled from 'styled-components';
import {
  useFloating, useInteractions, useClick,
  shift, offset as offsetUi, flip, FloatingFocusManager, FloatingOverlay, autoUpdate,
} from '@floating-ui/react';
import type { Placement } from '@floating-ui/core';

import Portal from '../Portal';
import Box from '../../elements/Box';

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
  onClose?: () => void;
  /** 開けた場合のコールバック */
  onOpen?: () => void;
  /** コンテンツを出さない */
  disabled?: boolean;
}

export interface PopoverRef {
  open: () => void;
  close: () => void;
}

function stopPropagation(e?: React.MouseEvent<Element>) {
  if (!e) return;
  e.stopPropagation();
}

const Popover = forwardRef(({
  position, label, children, color = 'background',
  onOpen, onClose, disabled, className = '',
  offset = { x: 0, y: 6 },
  ...rest
}: Props, ref: React.Ref<PopoverRef>) => {
  const [open, setOpen] = useState(false);
  const { refs, floatingStyles, context } = useFloating({
    placement: position,
    middleware: [
      shift(),
      flip({ fallbackAxisSideDirection: 'end' }),
      offsetUi({ mainAxis: offset.y, crossAxis: offset.x }),
    ],
    open,
    onOpenChange: setOpen,
    whileElementsMounted: autoUpdate,
  });

  const handleFocus = (e?: React.MouseEvent<HTMLButtonElement>) => {
    stopPropagation(e);
    setOpen(true);
    if (onOpen) onOpen();
  };

  const handleBlur = (e?: React.MouseEvent<HTMLButtonElement | HTMLDivElement>) => {
    stopPropagation(e);
    setOpen(false);
    if (onClose) onClose();
  };

  useEffect(() => {
    if (disabled && open) {
      setOpen(false);
    }
  }, [disabled, open]);

  useImperativeHandle(ref, () => ({
    open: handleFocus,
    close: handleBlur,
  }));

  const { getFloatingProps, getReferenceProps } = useInteractions([
    useClick(context, { enabled: !disabled }),
  ]);
  
  return (
    <>
      {cloneElement(Children.only(label), {
        ref: refs.setReference,
        ...getReferenceProps({ tabIndex: 0, role: 'button', disabled, onClick: stopPropagation }),
      })}
      <Portal>
        {open ? (
          <FloatingOverlay data-testid="visits-style-shadow" onClick={handleBlur}>
            <FloatingFocusManager context={context} modal={false}>
              <Tooltip
                role="tooltip"
                ref={refs.setFloating}
                color={color}
                style={floatingStyles}
                {...getFloatingProps({ ...rest, className, onClick: stopPropagation })}
              >
                {children}
              </Tooltip>
            </FloatingFocusManager>
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
  z-index: 40;
`;

const Shadow = styled.div`
  position: fixed;
  z-index: 38;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
