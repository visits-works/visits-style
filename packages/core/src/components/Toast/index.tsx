import React, { useEffect, HTMLAttributes, useCallback } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { Transition, TransitionGroup } from 'react-transition-group';

import Portal from '../Portal';
import Close from '../../elements/Icons/Close';
import Box from '../../elements/Box';
import { ColorType } from '../../types';

type PositionType = 'top' | 'top-left' | 'top-right' | 'bottom' | 'bottom-left' | 'bottom-right';

interface ToastProps extends HTMLAttributes<HTMLDivElement> {
  /** 認識ID */
  id: string;
  /** 表示する内容 */
  message?: React.ReactNode;
  /** 背景の色 */
  color?: ColorType;
  /**
   * 表示される時間 nullの場合は自動で閉じられません
   * @default 5000
   */
  duration?: number | null;
  /** 押したら閉じられる */
  clearOnClick?: boolean;
}

const Wrapper = styled(Box)<{ clear?: boolean }>`
  position: relative;
  padding: 0.375em 0.75em;
  max-width: 100%;
  margin-bottom: 1rem;
  z-index: 9999;
  width: fit-content;

  transition-property: transform, opacity;
  transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-duration: 250ms;

  &.entering {
    opacity: 0.01;
    transform: scale(0.8);
  }
  &.entered {
    opacity: 1;
    transform: scale(1);
  }
  &.exiting {
    opacity: 0.01;
    transform: scale(0.8);
  }

  ${({ clear }) => (clear ? { paddingRight: '2.25rem' } : undefined)}
`;

const ClearButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  margin: 0;
  padding: 0;
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  width: 2rem;

  svg {
    width: 1rem;
    height: 1rem;
  }

  &:hover {
    background: rgba(0,0,0,0.15);
  }
`;

function ToastItem(
  {
    color, message, duration = 5000, clear, clearOnClick, id, ...rest
  }: ToastProps & { clear: (id: string) => void },
) {
  const onClear = useCallback(() => clear(id), [clear, id]);

  useEffect(() => {
    if (duration) {
      const timeout = setTimeout(onClear, duration);
      return () => clearTimeout(timeout);
    }
    return undefined;
  }, [onClear, duration]);

  return (
    <Wrapper
      color={color}
      clear={clearOnClick}
      data-testid="toast-item"
      borderless
      {...rest}
    >
      {message}
      {clearOnClick && <ClearButton onClick={onClear}><Close /></ClearButton>}
    </Wrapper>
  );
}

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  /** 表示するToastのリスト */
  toasts: ToastProps[];
  /** toastを消すタイミングのコールバック */
  clear: (id: string) => void;
  /**
   * toastの表示される場所の指定
   * top, top-right, top-left, bottom, bottom-right, bottom-left
   * @default 'top-right'
   */
  position?: PositionType;
  /**
   * margin
   * @default '1rem'
   */
  margin?: string;
  /** スクロールしても固定として表示する */
  fixed?: boolean;
}

export default function Toast(
  { toasts, clear, fixed, style, margin = '1rem', position, ...rest }: ContainerProps,
) {
  return (
    <Portal>
      <Container
        {...rest}
        pos={position}
        margin={margin}
        style={{ position: (fixed ? 'fixed' : 'absolute'), ...style }}
      >
        <TransitionGroup component={null}>
          {toasts.map((props) => (
            <Transition key={props.id} timeout={250} in unmountOnExit>
              {(state) => (
                <ToastItem
                  {...props}
                  className={state}
                  key={props.id}
                  clear={clear}
                />
              )}
            </Transition>
          ))}
        </TransitionGroup>
      </Container>
    </Portal>
  );
}

const Container = styled.div<{ pos: ContainerProps['position'], margin: ContainerProps['margin'] }>`
  display: flex;
  flex-direction: column;

  ${({ pos, margin }) => {
    switch (pos) {
      case 'bottom': {
        return { bottom: margin, left: '50%', alignItems: 'center', transform: 'translateX(-50%)' };
      }
      case 'bottom-left': {
        return { bottom: margin, left: margin, alignItems: 'flex-start' };
      }
      case 'bottom-right': {
        return { bottom: margin, right: margin, alignItems: 'flex-end' };
      }
      case 'top': {
        return { top: margin, left: '50%', alignItems: 'center', transform: 'translateX(-50%)' };
      }
      case 'top-right': {
        return { top: margin, right: margin, alignItems: 'flex-end' };
      }
      default: {
        return { top: margin, left: margin, alignItems: 'flex-start' };
      }
    }
  }}
`;
