import React, { useEffect, HTMLAttributes } from 'react';
// import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { Transition } from 'react-transition-group';

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
  /** 表示される時間 nullの場合は自動で閉じられません */
  duration: number | null;
  /** 押したら閉じられる */
  clearOnClick?: boolean;
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
`;

const ClearButton = styled.button`

`;

function ToastItem(
  {
    color, message, duration, clear, clearOnClick, id, ...rest
  }: ToastProps & { clear: (id: string) => void },
) {
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout> | null = null;
    if (duration) timeout = setTimeout(() => clear(id), duration);
    return () => {
      if (timeout) clearTimeout(timeout);
    };
  // eslint-disable-next-line
  }, []);

  return (
    <Transition
      timeout={250}
      in
      unmountOnExit
    >
      {state => (
        <Wrapper className={state} borderless color={color} {...rest}>
          {message}
          {clearOnClick && <ClearButton onClick={clear}>X</ClearButton>}
        </Wrapper>
      )}
    </Transition>
  );
}

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  /** 表示するToastのリスト */
  toasts: ToastProps[];
  /** toastを消すタイミングのコールバック */
  clear: (id: string) => void;
  /** top, top-right, top-left, bottom, bottom-right, bottom-left */
  position?: PositionType;
  margin?: string;
  /** スクロールしても固定として表示する */
  fixed?: boolean;
}

export default function Toast({ toasts, clear, fixed, style, ...rest }: ContainerProps) {
  // const element = useRef<HTMLDivElement | null>(null);

  // useLayoutEffect(() => {
  //   if (!element.current) element.current = document.createElement('div');
  //   document.body.appendChild(element.current);
  //   return () => {
  //     if (element.current) document.body.removeChild(element.current);
  //   };
  // }, []);

  return (
    <Container
      {...rest}
      style={{ position: fixed ? 'fixed' : 'absolute', ...style }}
    >
      {toasts.map(props => (
        <ToastItem
          {...props}
          key={props.id}
          clear={clear}
        />
      ))}
    </Container>
  );
}
Toast.defaultProps = {
  style: {},
  margin: '1rem',
};

const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  z-index: 9999;

  ${({ position, margin }) => {
    switch (position) {
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
      case 'top-right':
      default: {
        return { top: margin, right: margin, alignItems: 'flex-end' };
      }
    }
  }}
`;
