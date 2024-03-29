import React, { Children, cloneElement, useImperativeHandle, useState, forwardRef, MutableRefObject } from 'react';
import { styled } from 'styled-components';
import {
  useFloating, useInteractions, useHover, useClientPoint,
  shift, offset as offsetUi, flip, useId, autoUpdate,
} from '@floating-ui/react';
import type { Placement, ReferenceElement } from '@floating-ui/core';

import Portal from '../Portal';
import { ColorType } from '../../types';

export interface TooltipRef {
  floating: MutableRefObject<HTMLElement | null>;
  reference: MutableRefObject<ReferenceElement | null>;
  open: () => void;
  close: () => void;
}

export interface TooltipProps {
  /** 吹き出しとして表示したい内容 */
  label: React.ReactNode;
  /** マウスオーバーの対象になるelement */
  children: React.ReactElement;
  /** 吹き出しの背景色の指定 */
  color?: ColorType;
  /**
   * 表示される場所
   * @default 'bottom'
   */
  position?: Placement;

  /**
   * ツールチップが表示される間隔, 単位はpx
   * @default '{ x: 0, y: 6 }'
   */
  offset?: { x: number; y: number; };
  /** 吹き出し表示座標を対象のElementではなくマウスカーソルにする */
  clientPoint?: boolean;
  /** 吹き出しを出さない */
  disabled?: boolean;

  className?: string;
}

const Tooltip = forwardRef<TooltipRef, TooltipProps>(({
  children, position = 'bottom',
  label, color, className = '',
  offset = { x: 0, y: 6 }, clientPoint = false, disabled,
}, ref) => {
  const [open, setOpen] = useState(false);
  const nodeId = useId();
  const { refs, floatingStyles, context } = useFloating({
    nodeId,
    open,
    placement: position,
    middleware: [
      shift(),
      flip(),
      offsetUi({ mainAxis: offset.y, crossAxis: offset.x }),
    ],
    whileElementsMounted: disabled ? undefined : autoUpdate,
    onOpenChange: setOpen,
  });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    useHover(context, { enabled: !disabled }),
    useClientPoint(context, { enabled: clientPoint }),
  ]);

  useImperativeHandle(ref, () => ({
    floating: refs.floating,
    reference: refs.reference,
    open: () => setOpen(true),
    close: () => setOpen(false),
  }));

  const child = typeof children === 'string' ? <span>{children}</span> : children;

  return (
    <>
      {cloneElement(Children.only(child), {
        ref: refs.setReference,
        ...getReferenceProps(),
      })}
      <Portal>
        {open && !disabled ? (
          <TooltipWrapper
            className={className}
            ref={refs.setFloating}
            role="tooltip"
            $color={color}
            style={floatingStyles}
            {...getFloatingProps()}
          >
            {label}
          </TooltipWrapper>
        ) : null}
      </Portal>
    </>
  );
});

export default Tooltip;

const TooltipWrapper = styled.div<{ $color: TooltipProps['color']; }>`
  position: relative;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  z-index: 9999;
  padding: 0.375rem 0.625rem;
  cursor: default;
  white-space: pre;
  font-size: 0.85rem;
  z-index: 9999;

  background-color: ${({ $color, theme }) => ($color ? (theme[$color] || theme.background) : theme.background)};

  &:focus {
    outline: none;
  }
`;
