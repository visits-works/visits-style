import React, { HTMLAttributes } from 'react';
import { Transition } from 'react-transition-group';
import styled from 'styled-components';

interface Props extends HTMLAttributes<HTMLDivElement> {
  header: any;
  show: boolean;
  timeout?: number;
}
export default function Accordion({ header, show, children, timeout, ...rest }: Props) {
  return (
    <div {...rest}>
      {header}
      <Transition
        timeout={timeout!}
        in={show}
        unmountOnExit
      >
        {state => (
          <AnimatedContent className={state} timeout={timeout!}>
            {children}
          </AnimatedContent>
        )}
      </Transition>
    </div>
  );
}
Accordion.defaultProps = {
  timeout: 300,
};

const AnimatedContent = styled.div`
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
