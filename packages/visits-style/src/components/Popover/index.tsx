import React, { useState, useCallback, useRef } from 'react';
import styled, { css } from 'styled-components';
import Box, { Props as BoxProps } from '../Box';
import { CSSType } from '../../types';

interface Props extends BoxProps {
  /** ボタンの内容 */
  label: React.ReactNode;
  /** 内容のリスト */
  children?: React.ReactNode | React.ReactNode;
  /** 右の基準でリストを表示する */
  right?: boolean;
  /** 吹き出しが表示される場所 */
  position?: 'top-left' | 'top' | 'top-right' | 'bottom-left' | 'bottom' | 'bottom-right';
}

export default function Popover({ position, label, children, ...rest }: Props) {
  const parent = useRef<HTMLDivElement | null>(null);
  const tooltip = useRef<HTMLDivElement | null>(null);

  const [show, setShow] = useState(false);
  const [tooltipStyle, setStyle] = useState({});

  const onOpen = useCallback(() => {
    if (show || !parent.current || !tooltip.current) return;
    const parentRect = parent.current.getBoundingClientRect();
    const tooltipRect = tooltip.current.getBoundingClientRect();

    switch (position) {
      case 'top-left': {
        setStyle({ bottom: `${parentRect.height + 8}px`, left: 0 });
        break;
      }
      case 'top-right': {
        setStyle({ bottom: `${parentRect.height + 8}px`, right: 0 });
        break;
      }
      case 'top': {
        setStyle({
          bottom: `${parentRect.height + 8}px`,
          left: `${(parentRect.width - tooltipRect.width) >> 1}px`,
        });
        break;
      }
      case 'bottom-right': {
        setStyle({ top: `${parentRect.height + 8}px`, right: 0 });
        break;
      }
      case 'bottom': {
        setStyle({
          top: `${parentRect.height + 8}px`,
          left: `${(parentRect.width - tooltipRect.width) >> 1}px`,
        });
        break;
      }
      // bottom-left
      default: {
        setStyle({ top: `${parentRect.height + 8}px`, left: 0 });
        break;
      }
    }
    setShow(true);
  }, [show, position]);

  const onClose = useCallback(() => {
    if (show) setShow(false);
  }, [show]);

  return (
    <Wrapper
      tabIndex={0}
      role="button"
      ref={parent}
      onFocus={onOpen}
      onBlur={onClose}
    >
      {label}
      <Tooltip
        show={show}
        role="tooltip"
        ref={tooltip}
        style={tooltipStyle}
        {...rest}
      >
        {children}
      </Tooltip>
    </Wrapper>
  );
}

Popover.defaultProps = {
  color: 'white',
};

const Wrapper = styled.div<{ css?: CSSType }>`
  display: block;
  outline: none;
  color: inherit;
  position: relative;

  &:hover {
    color: inherit;
    text-decoration: none;
  }
`;

const Tooltip = styled(Box)<{ show?: boolean }>`
  position: absolute;
  display: flex;
  clear: both;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  z-index: 9999;
  padding: 0.5rem 0;
  width: auto;
  height: auto;
  cursor: auto;

  will-change: transform, opacity, visibility;
  transform: scale(0.8);
  opacity: 0;
  visibility: hidden;

  transition-property: transform, opacity, visibility;
  transition-duration: 100ms;
  transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);

  ${({ show }) => show && css`
    transform: scale(1);
    opacity: 1;
    visibility: visible;
  `}
`;
