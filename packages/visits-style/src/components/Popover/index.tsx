import React, { useState, useCallback, useRef, HTMLAttributes, useEffect } from 'react';
import styled, { css } from 'styled-components';
import Box from '../../elements/Box';

interface Props extends HTMLAttributes<HTMLDivElement> {
  /** ボタンの内容 */
  label: React.ReactNode;
  /** 内容のリスト */
  children?: React.ReactNode | React.ReactNode;
  /** 右の基準でリストを表示する */
  right?: boolean;
  /** 吹き出しが表示される場所 */
  position?: 'top-left' | 'top' | 'top-right' | 'bottom-left' | 'bottom' | 'bottom-right';
  /** 閉じた場合のコールバック */
  onClose?: () => void;
  /** 開けた場合のコールバック */
  onOpen?: () => void;
  /** コンテンツを出さない */
  disabled?: boolean;
}

export default function Popover({
  position, label, children, color = 'white', onOpen, onClose, disabled, ...rest
}: Props) {
  const parent = useRef<HTMLDivElement | null>(null);
  const tooltip = useRef<HTMLDivElement | null>(null);

  const [show, setShow] = useState(false);
  const [tooltipStyle, setStyle] = useState({});

  useEffect(() => {
    if (show && disabled) setShow(false);
  }, [show, disabled]);

  const handleFocus = useCallback(() => {
    if (show || !parent.current || !tooltip.current || !!disabled) return;
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
    if (onOpen) onOpen();
    setShow(true);
  }, [show, position, onOpen, disabled]);

  const handleBlur = useCallback(() => {
    if (onClose) onClose();
    if (show) setShow(false);
  }, [show, onClose]);

  return (
    <Wrapper
      tabIndex={0}
      role="button"
      ref={parent}
      onClick={handleFocus}
    >
      {label}
      <Tooltip
        show={show}
        role="tooltip"
        ref={tooltip}
        style={tooltipStyle}
        color={color}
        {...rest}
      >
        {children}
      </Tooltip>
      {show && (<Shadow onClick={handleBlur} />)}
    </Wrapper>
  );
}

const Wrapper = styled.div`
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

const Shadow = styled.div`
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
`;
