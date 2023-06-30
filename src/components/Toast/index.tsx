import React from 'react';
import styled from 'styled-components';
import { useFloating, offset } from '@floating-ui/react';

import ToastItem from './ToastItem';
import type { ToastContainerProps } from './types';

import Portal from '../Portal';

export default function Toast({ toasts, clear, fixed, margin = 16, position }: ToastContainerProps) {
  const { refs, floatingStyles } = useFloating({
    open: true,
    placement: position,
    strategy: fixed ? 'fixed' : 'absolute',
    middleware: [
      offset(margin),
    ],
  });

  return (
    <Portal>
      <ToastList ref={refs.setFloating} style={floatingStyles}>
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

  li + li {
    margin-top: 1rem;
  }
`;
