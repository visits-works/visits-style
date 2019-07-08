import React, { useState, useRef, HTMLAttributes, useEffect } from 'react';
import { createPortal } from 'react-dom';
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
  position, label, children, color = 'white', onOpen, onClose, disabled, className = '', ...rest
}: Props) {
  const parent = useRef<HTMLDivElement | null>(null);
  const dom = useRef<HTMLDivElement | null>(null);
  const size = useRef(0);

  const [show, setShow] = useState(false);
  const [tooltipStyle, setStyle] = useState({});

  useEffect(() => {
    if (typeof document !== 'undefined') {
      dom.current = document.createElement('div');
      dom.current.setAttribute('role', 'tooltip');
    }
  }, []);

  useEffect(() => {
    if (show && disabled) setShow(false);
  }, [show, disabled]);

  useEffect(() => {
    let mounted = false;
    if (show) {
      document.body.appendChild(dom.current!);
      mounted = true;
    }
    return () => {
      if (mounted) document.body.removeChild(dom.current!);
    };
  }, [show]);

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
    const height = elem.offsetHeight;
    const parentRect = parent.current.getBoundingClientRect();
    const top = parent.current.offsetTop;
    const left = parent.current.offsetLeft;
    let right = left + parentRect.width - width;
    size.current = width;

    if (parent.current.offsetParent && parent.current.offsetParent.tagName !== 'BODY') {
      // @ts-ignore
      right += parent.current.offsetParent.offsetLeft;
    }

    switch (position) {
      case 'top-left': {
        setStyle({ top: `${top - 8 - height}px`, left });
        break;
      }
      case 'top-right': {
        setStyle({ top: `${top - 8 - height}px`, left: right });
        break;
      }
      case 'top': {
        setStyle({
          top: `${top - 8 - height}px`,
          left: `${left - (width >> 1)}px`,
        });
        break;
      }
      case 'bottom-right': {
        setStyle({ top: `${top + parentRect.height + 8}px`, left: right });
        break;
      }
      case 'bottom': {
        setStyle({
          top: `${top + parentRect.height + 8}px`,
          left: `${left - (width >> 1)}px`,
        });
        break;
      }
      // bottom-left
      default: {
        setStyle({ top: `${top + parentRect.height + 8}px`, left });
        break;
      }
    }
  }

  return (
    <Wrapper
      tabIndex={0}
      role="button"
      onClick={handleFocus}
      ref={parent}
    >
      {label}
      {show && (<Shadow onClick={handleBlur} />)}
      <Transition
        in={show}
        timeout={250}
        unmountOnExit
      >
        {state => createPortal((
          <Tooltip
            className={[state, className].join(' ')}
            role="document"
            ref={refCallback}
            style={tooltipStyle}
            color={color}
            {...rest}
          >
            {children}
          </Tooltip>
        ), dom.current!)}
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
  z-index: 100;

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

const Shadow = styled.div`
  position: fixed;
  z-index: 98;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
