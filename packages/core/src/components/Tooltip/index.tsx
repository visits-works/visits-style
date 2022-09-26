import React, { Children, cloneElement, useState } from 'react';
import styled from 'styled-components';
import { useFloating, shift, offset as offsetUi, flip, autoUpdate } from '@floating-ui/react-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Placement } from '@floating-ui/core';

import Portal from '../Portal';
import { ColorType } from '../../types';
import wrapEvent from '../../utils/wrapEvent';

interface TooltipProps {
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

  className?: string;
}

export default function Tooltip({
  children, position = 'bottom',
  label, color, className = '',
  offset = { x: 0, y: 6 },
}: TooltipProps) {
  const { reference, floating, strategy, x, y } = useFloating({
    placement: position,
    middleware: [
      shift(),
      flip(),
      offsetUi({ mainAxis: offset.y, crossAxis: offset.x }),
    ],
    whileElementsMounted: autoUpdate,
  });
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const child = typeof children === 'string' ? <span>{children}</span> : children;

  return (
    <>
      {cloneElement(Children.only(child), {
        ref: reference,
        onMouseEnter: wrapEvent(child, 'onMouseEnter', handleOpen),
        onMouseLeave: wrapEvent(child, 'onMouseLeave', handleClose),
        onFocus: wrapEvent(child, 'onFocus', handleOpen),
        onBlur: wrapEvent(child, 'onBlur', handleClose),
      })}
      {open && (
        <Portal>
          <TooltipWrapper
            className={className}
            ref={floating}
            role="tooltip"
            color={color}
            style={{
              position: strategy,
              top: y || 0,
              left: x || 0,
            }}
          >
            {label}
          </TooltipWrapper>
        </Portal>
      )}
    </>
  );
}

const TooltipWrapper = styled.div<Pick<TooltipProps, 'color'> & { show?: boolean }>`
  position: relative;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  z-index: 9999;
  padding: 0.375rem 0.625rem;
  cursor: default;
  white-space: pre;
  font-size: 0.85rem;
  z-index: 9999;

  background-color: ${({ color, theme }) => (color ? (theme[color] || theme.background) : theme.background)};
`;
