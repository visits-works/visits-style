import React, { useState, useRef, HTMLAttributes, useEffect } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { Transition } from 'react-transition-group';
import Box from '../../elements/Box';
import useDiv from '../../hooks/useDiv';

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
  const rect = useRef({ left: 0, top:0, width: 0, height: 0 });

  const [show, setShow] = useState(false);
  const [dom, onExited] = useDiv(show, 'tooltip');

  const handleFocus = () => {
    if (show || !!disabled) return;
    if (onOpen) onOpen();
    setShow(true);
  };

  const handleBlur = () => {
    if (!show) return;
    if (onClose) onClose();
    setShow(false);
  };

  useEffect(() => {
    if (show && disabled) handleBlur();
  }, [show, disabled]);

  const refCallback = (elem: HTMLElement | null) => {
    if (!parent.current || !elem || !show) return;
    const width = elem.offsetWidth || rect.current.width;
    const height = elem.offsetHeight || rect.current.height;
    const parentRect = parent.current.getBoundingClientRect();
    let _left = rect.current.left;
    let _top = rect.current.top;

    rect.current.width = width;
    rect.current.height = height;

    if (_left === 0 || _top === 0) {
      let target: HTMLDivElement | Element | null = parent.current;
      while(target !== null) {
        // @ts-ignore
        const offLeft = target.offsetLeft;
        // @ts-ignore
        const offTop = target.offsetTop;
        if (!isNaN(offLeft)) _left += offLeft;
        if (!isNaN(offTop)) _top += offTop;
        // @ts-ignore
        target = target.offsetParent;
      }
      rect.current.left = _left;
      rect.current.top = _top;
    }

    switch (position) {
      case 'top-left': {
        elem.style.top = `${_top - 8 - height}px`;
        elem.style.left = `${_left}px`;
        break;
      }
      case 'top-right': {
        elem.style.top = `${_top - 8 - height}px`;
        elem.style.left = `${_left - width + parentRect.width}px`;
        break;
      }
      case 'top': {
        elem.style.top = `${_top - 8 - height}px`;
        elem.style.left = `${_left - ((width - parentRect.width) >> 1)}px`;
        break;
      }
      case 'bottom-right': {
        elem.style.top = `${_top + parentRect.height + 8}px`;
        elem.style.left = `${_left - width + parentRect.width}px`;
        break;
      }
      case 'bottom': {
        elem.style.top = `${_top + parentRect.height + 8}px`;
        elem.style.left = `${_left - ((width - parentRect.width) >> 1)}px`;
        break;
      }
      // bottom-left
      default: {
        elem.style.top = `${_top + parentRect.height + 8}px`;
        elem.style.left = `${_left}px`;
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
        onExited={onExited}
        unmountOnExit
      >
        {state => createPortal((
          <Tooltip
            className={[className, state].join(' ').trim()}
            role="document"
            ref={refCallback}
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
  z-index: 40;

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
  z-index: 38;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
