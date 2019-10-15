import React, { HTMLAttributes } from 'react';
import { Transition } from 'react-transition-group';
import styled from 'styled-components';

interface Props extends HTMLAttributes<HTMLDivElement> {
  /** ボタンなどの表示するラベル */
  header: any;
  show: boolean;
  /**
   * アニメーションの時間
   * @default 300
   */
  timeout?: number;
}
export default function Accordion({ header, show, children, timeout = 300, ...rest }: Props) {
  return (
    <div {...rest}>
      {header}
      <Transition
        timeout={timeout}
        in={show}
        unmountOnExit
      >
        {(state) => (
          <AnimatedContent className={state} timeout={timeout}>
            {children}
          </AnimatedContent>
        )}
      </Transition>
    </div>
  );
}

const AnimatedContent = styled.div<{ timeout: number }>`
  transform-origin: top;
  will-change: transform, max-height;
  transition-property: transform, max-height;
  transition-duration: ${({ timeout }) => timeout}ms;
  transition-timing-function: ease-in-out;
  height: auto;
  overflow: hidden;
  max-height: auto;

  &.entering {
    max-height: 0;
    transform: scaleY(0);
  }

  &.entered {
    max-height: 15rem;
    transform: scaleY(1);
  }

  &.exiting {
    max-height: 0px;
    transform: scaleY(0);
  }
`;