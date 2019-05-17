import React, { useCallback, useRef, useLayoutEffect, useEffect, HTMLAttributes } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

import Box from '../../elements/Box';
import { ColorType } from '../../types';

type PositionType = 'top' | 'top-left' | 'top-right' | 'bottom' | 'bottom-left' | 'bottom-right';

interface ToastType {
  /** 認識ID */
  id: string;
  /** 表示する内容 */
  message?: React.ReactNode;
  /** 背景の色 */
  color?: ColorType;
  /** 表示される時間 nullの場合は自動で閉じられません */
  duration?: number | null;
}

interface ToastProps extends ToastType {
  clear: () => void;
}

const Wrapper = styled(Box)`
  padding: 0.375em 0.75em;
  max-width: 100%;
  margin-bottom: 1rem;
  z-index: 9999;
  width: fit-content;

  transition-property: transform, opacity;
  transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-duration: 250ms;

  &.move-enter {
    opacity: 0.01;
    transform: scale(0.8);
  }
  &.move-enter-active {
    opacity: 1;
    transform: scale(1);
  }
  &.move-exit {
    opacity: 1;
    transform: scale(1);
  }
  &.move-exit-active {
    opacity: 0.01;
    transform: scale(0.8);
  }
`;

// function setPosition(position: string, isFixed?: boolean) {
//   // tslint:disable-next-line
//   const base = `position: ${isFixed ? 'fixed' : 'absolute'}; z-index: 9999; display: flex; flex-direction: column; `;
//   switch (position) {
//     case 'bottom': {
//       return `${base} bottom: 1rem; left: 50%; align-item: center; transform: translateX(-50%);`;
//     }
//     case 'bottom-left': {
//       return `${base} bottom: 1rem; left: 1rem; align-item: flex-start;`;
//     }
//     case 'bottom-right': {
//       return `${base} bottom: 1rem; right: 1rem; align-item: flex-end;`;
//     }
//     case 'top': {
//       return `${base} top: 1rem; left: 50%; align-item: center; transform: translateX(-50%);`;
//     }
//     case 'top-left': {
//       return `${base} top: 1rem; left: 1rem; align-item: flex-start;`;
//     }
//     case 'top-right':
//     default: {
//       return `${base} top: 1rem; right: 1rem; align-item: flex-end;`;
//     }
//   }
// }

function ToastItem({ color, message, duration, clear }: ToastProps) {
  useEffect(() => {
    const timeout = setTimeout(clear, duration);
    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [clear, duration]);

  return (
    <Wrapper borderless color={color}>
      {message}
    </Wrapper>
  );
}

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  /** 表示するToastのリスト */
  toasts: ToastType[];
  /** toastを消すタイミングのコールバック */
  clear: (id: string) => void;
  /** top, top-right, top-left, bottom, bottom-right, bottom-left */
  position?: PositionType;
  /** スクロールしても固定として表示する */
  fixed?: boolean;
}

export default function Toast({ toasts, clear }: ContainerProps) {
  const element = useRef<HTMLDivElement | null>(null);
  const clearItem = useCallback((id: string) => () => clear(id), [clear]);

  useLayoutEffect(() => {
    if (!element.current) element.current = document.createElement('div');
    document.body.appendChild(element.current);
    return () => {
      if (element.current) document.body.removeChild(element.current);
    };
  }, []);

  if (!element.current) return null;

  return createPortal((
    <Container>
      {toasts.map(props => (
        <ToastItem key={props.id} {...props} clear={clearItem(props.id)} />
      ))}
    </Container>
  ), element.current);
}

const Container = styled.div<ContainerProps>`
  position: fixed;
  display: flex;
  flex-direction: column;
  z-index: 9999;

  ${({ position }) => {
    switch (position) {
      case 'bottom': {
        return { bottom: '1rem', left: '50%', alignItem: 'center', transform: 'translateX(-50%)' };
      }

      case 'top-right':
      default: {
        return { top: '1rem', right: '1rem', alignItem: 'flex-end' };
      }
    }
  }}
`;
