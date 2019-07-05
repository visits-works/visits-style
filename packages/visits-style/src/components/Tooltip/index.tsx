import React, { useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import { Transition } from 'react-transition-group';
import { ColorType } from '../../types';

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

export default function Tooltip({ children, position = 'bottom', label, color, ...rest }: TooltipProps) {
  const parent = useRef<HTMLDivElement | null>(null);
  const size = useRef(0);

  const [show, setShow] = useState(false);
  const [tooltipStyle, setStyle] = useState({});

  const openTooltip = () => setShow(true);
  const closeTooltip = () => {
    setShow(false);
    size.current = 0;
  }

  const refCallback = (elem: HTMLDivElement) => {
    if (size.current > 0 || !parent.current || !elem) return;
    size.current = elem.offsetWidth;

    const parentRect = parent.current.getBoundingClientRect();
    const rect = elem.getBoundingClientRect();
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
  };

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
      <Transition
        in={show}
        timeout={250}
        unmountOnExit
      >
        {state => (
          <TooltipWrapper
            className={state}
            ref={refCallback}
            show={show}
            role="tooltip"
            color={color}
            style={tooltipStyle}
          >
            {label}
          </TooltipWrapper>
        )}
      </Transition>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const TooltipWrapper = styled.div<{ show?: boolean, color?: ColorType }>`
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

  background-color: ${({ color, theme }) => theme[color] || 'white'};

  ${({ show }) => show && css`
    transform: scale(1);
    opacity: 1;
    visibility: visible;
  `}
`;
