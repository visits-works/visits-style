import React, { CSSProperties, useMemo } from 'react';
import { styled } from 'styled-components';

import ToastItem from './ToastItem';
import type { ToastContainerProps } from './types';

import Portal from '../Portal';

export default function Toast({ toasts, clear, fixed, margin = '16px', position = 'top-left' }: ToastContainerProps) {
  const style = useMemo<CSSProperties>(() => {
    const base = { position: fixed ? 'fixed' : 'absolute' } as CSSProperties;
    if (position.indexOf('top') > -1) {
      base.top = margin;
    } else if (position.indexOf('bottom') > -1) {
      base.bottom = margin;
    }

    if (position.indexOf('left') > -1) {
      base.left = margin;
      base.alignItems = 'flex-start';
    } else if (position.indexOf('right') > -1) {
      base.right = margin;
      base.alignItems = 'flex-end';
    } else {
      base.left = '50%';
      base.alignItems = 'center';
      base.transform = 'translateX(-50%)';
    }

    return base;
  }, [fixed, margin, position]);

  return (
    <Portal>
      <ToastList style={style}>
        {toasts.map((props) => (
          <ToastItem
            {...props}
            key={props.id}
            clear={clear}
          />
        ))}
      </ToastList>
    </Portal>
  );
}

const ToastList = styled.ul`
  display: flex;
  flex-direction: column;
  z-index: 9999;
  pointer-events: none;
  overflow: hidden;

  li + li {
    margin-top: 1rem;
  }
`;
