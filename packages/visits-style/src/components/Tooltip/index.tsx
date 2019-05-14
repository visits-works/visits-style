import React, { useState, useRef, useCallback } from 'react';
import styled, { css } from 'styled-components';
import { ColorType, CSSType } from '../../types';

interface TooltipProps {
  /** 吹き出しとして表示したい内容 */
  label: any;
  /** マウスオーバーの対象になるelement */
  children: any;
  /** 吹き出しの背景色の指定 */
  color?: ColorType;
  /** 表示される場所 */
  position?: 'top' | 'left' | 'right' | 'bottom';
}

export default function Tooltip({ children, position, label, ...rest }: TooltipProps) {
  const parent = useRef<HTMLDivElement | null>(null);
  const tooltip = useRef<HTMLDivElement | null>(null);

  const [show, setShow] = useState(false);
  const [tooltipStyle, setStyle] = useState({});

  const openTooltip = useCallback(() => {
    if (show || !parent.current || !tooltip.current) return;

    const parentRect = parent.current.getBoundingClientRect();
    const rect = tooltip.current.getBoundingClientRect();
    const left = parentRect.width + 8;
    const top = parentRect.height + 8;
    const width = (parentRect.width - rect.width) >> 1;
    const height = (parentRect.height - rect.height) >> 1;

    switch (position) {
      case 'top': {
        setStyle({ bottom: `${top}px`, left: `${width}px` });
        break;
      }
      case 'left': {
        setStyle({ right: `${left}px`, top: `${height}px` });
        break;
      }
      case 'right': {
        setStyle({ left: `${left}px`, top: `${height}px` });
        break;
      }
      default: {
        setStyle({ top: `${top}px`, left: `${width}px` });
        break;
      }
    }
    setShow(true);
  // eslint-disable-next-line
  }, [position]);

  const closeTooltip = useCallback(() => setShow(false), []);

  return (
    <Wrapper
      ref={parent}
      onMouseOver={openTooltip}
      onFocus={openTooltip}
      onMouseOut={closeTooltip}
      onBlur={closeTooltip}
      {...rest}
    >
      {children}
      <TooltipWrapper
        ref={tooltip}
        show={show}
        role="tooltip"
        style={tooltipStyle}
      >
        {label}
      </TooltipWrapper>
    </Wrapper>
  );
}
Tooltip.defaultProps = {
  position: 'bottom',
  color: 'dark',
};

const Wrapper = styled.div<{ css?: CSSType }>`
  position: relative;
  display: inline-block;
`;

const TooltipWrapper = styled.div<{ show?: boolean }>`
  position: absolute;
  clear: both;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  z-index: 9999;
  padding: 0.375rem 0.625rem;
  cursor: default;
  width: auto;
  white-space: pre;
  font-size: 0.85rem;
  z-index: 9999;

  transform: scale(0.8);
  opacity: 0;
  visibility: hidden;

  will-change: transform, opacity, visibility;
  transition-property: transform, opacity, visibility;
  transition-duration: 100ms;
  transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);

  ${({ show }) => show && css`
    transform: scale(1);
    opacity: 1;
    visibility: visible;
  `}
`;
