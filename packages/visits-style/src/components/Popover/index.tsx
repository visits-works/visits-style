import React, { useState, useRef, HTMLAttributes, useEffect } from 'react';
import styled from 'styled-components';
import { Transition } from 'react-transition-group';
import Box from '../../elements/Box';

interface Props extends HTMLAttributes<HTMLDivElement> {
  /** ボタンの内容 */
  label: React.ReactNode;
  /** 内容のリスト */
  children?: React.ReactNode | React.ReactNode;
  /** 吹き出しの背景色 */
  color?: string;
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
  const size = useRef(0);

  const [show, setShow] = useState(false);
  const [tooltipStyle, setStyle] = useState({});

  useEffect(() => {
    if (show && disabled) setShow(false);
  }, [show, disabled]);

  const handleFocus = () => {
    if (show || !!disabled) return;
    if (onOpen) onOpen();
    setShow(true);
  };

  const handleBlur = () => {
    if (!show) return;
    if (onClose) onClose();
    setShow(false);
    size.current = 0;
  };

  const refCallback = (elem: HTMLElement) => {
    if (size.current > 0 || !parent.current || !elem || !show) return;
    const width = elem.offsetWidth;
    const parentRect = parent.current.getBoundingClientRect();
    size.current = width;

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
          left: `${(parentRect.width - width) >> 1}px`,
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
          left: `${(parentRect.width - width) >> 1}px`,
        });
        break;
      }
      // bottom-left
      default: {
        setStyle({ top: `${parentRect.height + 8}px`, left: 0 });
        break;
      }
    }
  }

  return (
    <Wrapper
      tabIndex={0}
      role="button"
      onClick={handleFocus}
      onBlur={handleBlur}
      ref={parent}
    >
      {label}
      <Transition
        in={show}
        timeout={250}
        unmountOnExit
      >
        {state => (
          <Tooltip
            className={state}
            role="tooltip"
            ref={refCallback}
            style={tooltipStyle}
            color={color}
            {...rest}
          >
            {children}
          </Tooltip>
        )}
      </Transition>
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

const Tooltip = styled(Box)`
  position: absolute;
  display: flex;
  clear: both;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  padding: 0.5rem 0;
  width: auto;
  height: auto;
  cursor: auto;

  will-change: transform, opacity;

  transition-property: transform, opacity;
  transition-duration: 100ms;
  transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);

  &.entering, &.exiting, &.exited {
    transform: scale(0.8);
    opacity: 0;
  }

  &.entered {
    transform: scale(1);
    opacity: 1;
  }
`;
