/* eslint-disable no-param-reassign */
import React, { Children, cloneElement, useRef, useState } from 'react';
import styled from 'styled-components';
import { Placement } from '@popperjs/core';

import Portal from '../Portal';
import usePopper from '../../hooks/usePopper';
import { ColorType } from '../../types';

interface TooltipProps {
  /** 吹き出しとして表示したい内容 */
  label: any;
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
  const parent = useRef<HTMLDivElement | null>(null);
  const tooltip = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);

  const [openPopper, closePopper] = usePopper(
    parent,
    tooltip,
    {
      placement: position,
      offset,
    },
  );

  const handleOpen = () => {
    setOpen(true);
    requestAnimationFrame(openPopper);
  };

  const handleClose = () => {
    setOpen(false);
    closePopper();
  };

  return (
    <>
      {cloneElement(Children.only(children), {
        ref: parent,
        onMouseEnter: handleOpen,
        onMouseLeave: handleClose,
        onFocus: handleOpen,
        onBlur: handleClose,
      })}
      {open && (
        <Portal>
          <TooltipWrapper
            className={className}
            ref={tooltip}
            role="tooltip"
            color={color}
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
