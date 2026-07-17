import React, { CSSProperties, useMemo } from 'react';
import { styled } from 'styled-components';

import ToastItem from './ToastItem';
import type { ToastContainerProps } from './types';

import Portal from '../Portal';

export default function Toast({ toasts, clear, fixed, offset = {}, position = 'top-left', space = '16px' }: ToastContainerProps) {
  const style = useMemo<CSSProperties>(() => {
    const base = { position: fixed ? 'fixed' : 'absolute', ...offset } as CSSProperties;
    if (!Object.keys(offset).length) {
      if (position.indexOf('top') > -1) {
        base.top = '16px';
      } else if (position.indexOf('bottom') > -1) {
        base.bottom = '16px';
      }
      if (position.indexOf('left') > -1) {
        base.left = '16px';
      } else if (position.indexOf('right') > -1) {
        base.right = '16px';
      }
    }

    if (position.indexOf('left') > -1) {
      base.alignItems = 'flex-start';
    } else if (position.indexOf('right') > -1) {
      base.alignItems = 'flex-end';
    } else {
      base.left = '50%';
      base.alignItems = 'center';
      base.transform = 'translateX(-50%)';
    }

    return base;
  }, [fixed, offset, position]);

  return (
    <Portal>
      <ToastList style={style} $space={space}>
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

const ToastList = styled.ul<{ $space: string; }>`
  display: flex;
  flex-direction: column;
  z-index: 9999;
  overflow: hidden;

  li + li {
    margin-top: ${({ $space }) => $space};
  }
`;
