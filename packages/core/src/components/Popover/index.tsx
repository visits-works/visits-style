/* eslint-disable no-param-reassign */
import React, { useState, useCallback, useRef, HTMLAttributes, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { Transition } from 'react-transition-group';

import Portal from '../Portal';
import Box from '../../elements/Box';

interface Props extends HTMLAttributes<HTMLDivElement> {
  /** ボタンの内容 */
  label: React.ReactNode;
  /** 内容のリスト */
  children?: React.ReactNode | React.ReactNode;
  /**
   * 吹き出しの背景色
   * @default 'background'
   */
  color?: string;
  /** 右の基準でリストを表示する */
  right?: boolean;
  /**
   * 吹き出しが表示される場所
   * @default 'bottom-left'
   */
  position?: 'top-left' | 'top' | 'top-right' | 'bottom-left' | 'bottom' | 'bottom-right';
  /** 閉じた場合のコールバック */
  onClose?: () => void;
  /** 開けた場合のコールバック */
  onOpen?: () => void;
  /** コンテンツを出さない */
  disabled?: boolean;
  /** コンテナーdivのカスタムスタイル定義 */
  containerStyle?: ReturnType<typeof css>;
}

export default function Popover({
  position, label, children, color = 'background', onOpen, onClose, disabled, className = '', ...rest
}: Props) {
  const parent = useRef<HTMLDivElement | null>(null);

  const [show, setShow] = useState(false);
  const cache = useRef({ width: 0, height: 0 });

  const handleFocus = () => {
    if (show || !!disabled) return;
    if (onOpen) onOpen();
    setShow(true);
  };

  const handleBlur = useCallback(() => {
    if (!show) return;
    if (onClose) onClose();
    setShow(false);
  }, [onClose, show]);

  useEffect(() => {
    if (show && disabled) handleBlur();
  }, [show, disabled, handleBlur]);

  const refCallback = (elem: HTMLElement | null) => {
    if (!parent.current || !elem || !show) return;
    const parentRect = parent.current.getBoundingClientRect();
    const width = elem.offsetWidth || cache.current.width;
    const height = elem.offsetHeight || cache.current.height;
    const { left } = parentRect;
    let { top } = parentRect;

    if (window.scrollY) {
      top += window.scrollY;
    }

    if (width) cache.current.width = width;
    if (height) cache.current.height = height;

    switch (position) {
      case 'top-left': {
        elem.style.top = `${top - 8 - height}px`;
        elem.style.left = `${left}px`;
        break;
      }
      case 'top-right': {
        elem.style.top = `${top - 8 - height}px`;
        elem.style.left = `${left - width + parentRect.width}px`;
        break;
      }
      case 'top': {
        elem.style.top = `${top - 8 - height}px`;
        elem.style.left = `${left - ((width - parentRect.width) >> 1)}px`;
        break;
      }
      case 'bottom-right': {
        elem.style.top = `${top + parentRect.height + 8}px`;
        elem.style.left = `${left - width + parentRect.width}px`;
        break;
      }
      case 'bottom': {
        elem.style.top = `${top + parentRect.height + 8}px`;
        elem.style.left = `${left - ((width - parentRect.width) >> 1)}px`;
        break;
      }
      // bottom-left
      default: {
        elem.style.top = `${top + parentRect.height + 8}px`;
        elem.style.left = `${left}px`;
        break;
      }
    }
  };

  return (
    <Wrapper
      tabIndex={0}
      role="button"
      onClick={handleFocus}
      ref={parent}
    >
      {label}
      <Portal>
        <Transition
          in={show}
          timeout={250}
          unmountOnExit
        >
          {(state) => (
            <>
              <Tooltip
                className={[className, state].join(' ').trim()}
                role="tooltip"
                ref={refCallback}
                color={color}
                {...rest}
              >
                {children}
              </Tooltip>
              {show && (<Shadow onClick={handleBlur} />)}
            </>
          )}
        </Transition>
      </Portal>
    </Wrapper>
  );
}

const Wrapper = styled.div<Pick<Props, 'containerStyle'>>`
  display: block;
  outline: none;
  color: inherit;
  position: relative;

  &:hover {
    color: inherit;
    text-decoration: none;
  }

  ${({ containerStyle }) => containerStyle}
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
