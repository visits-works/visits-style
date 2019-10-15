/* eslint-disable no-param-reassign */
import React, { useState, useRef, HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { Transition } from 'react-transition-group';
import { ColorType } from '../../types';

interface TooltipProps extends HTMLAttributes<HTMLDivElement> {
  /** 吹き出しとして表示したい内容 */
  label: any;
  /** マウスオーバーの対象になるelement */
  children: any;
  /** 吹き出しの背景色の指定 */
  color?: ColorType;
  /**
   * 表示される場所
   * @default 'bottom'
   */
  position?: 'top' | 'left' | 'right' | 'bottom';
  /** 吹き出しのコンテナーdivのカスタムスタイル定義 */
  containerStyle?: ReturnType<typeof css>;
}

export default function Tooltip({
  children, position = 'bottom', label, color, className = '', ...rest
}: TooltipProps) {
  const parent = useRef<HTMLDivElement | null>(null);
  const rect = useRef({ width: 0, height: 0 });

  const [show, setShow] = useState(false);

  const openTooltip = () => setShow(true);
  const closeTooltip = () => setShow(false);

  const refCallback = (elem: HTMLDivElement | null) => {
    if (!parent.current || !elem || !show) return;

    const parentRect = parent.current.getBoundingClientRect();
    const left = parentRect.width + 8;
    const top = parentRect.height + 8;
    const width = elem.offsetWidth || rect.current.width;
    const height = elem.offsetHeight || rect.current.height;

    rect.current.width = width;
    rect.current.height = height;

    elem.style.bottom = null;
    elem.style.left = null;
    elem.style.right = null;
    elem.style.top = null;

    switch (position) {
      case 'top': {
        elem.style.bottom = `${top}px`;
        elem.style.left = `${(parentRect.width - width) >> 1}px`;
        break;
      }
      case 'left': {
        elem.style.top = `${(parentRect.height - height) >> 1}px`;
        elem.style.right = `${left}px`;
        break;
      }
      case 'right': {
        elem.style.top = `${(parentRect.height - height) >> 1}px`;
        elem.style.left = `${left}px`;
        break;
      }
      // bottom
      default: {
        elem.style.top = `${top}px`;
        elem.style.left = `${(parentRect.width - width) >> 1}px`;
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
        {(state) => (
          <TooltipWrapper
            className={[className, state].join(' ').trim()}
            ref={refCallback}
            show={show}
            role="tooltip"
            color={color}
          >
            {label}
          </TooltipWrapper>
        )}
      </Transition>
    </Wrapper>
  );
}

const Wrapper = styled.div<Pick<TooltipProps, 'containerStyle'>>`
  position: relative;
  display: inline-block;
  ${({ containerStyle }) => containerStyle}
`;

const TooltipWrapper = styled.div<Pick<TooltipProps, 'color'> & { show?: boolean }>`
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

  background-color: ${({ color, theme }) => (color ? (theme[color] || theme.background) : theme.background)};

  ${({ show }) => show && css`
    transform: scale(1);
    opacity: 1;
    visibility: visible;
  `}
`;