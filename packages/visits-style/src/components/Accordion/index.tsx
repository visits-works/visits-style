import React, { HTMLAttributes } from 'react';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';

interface Props extends HTMLAttributes<HTMLDivElement> {
  show: boolean;
  header: any;
}

const Wrapper = styled.div`
  transform-origin: top;
  transform-style: flat;
  will-change: transform, max-height;
  transition-property: transform, max-height;
  transition-duration: 300ms;
  transition-timing-function: ease-in-out;
  height: auto;
  overflow: hidden;
  max-height: auto;

  &.collapsed {
    max-height: 0;
    transform: scaleY(0);
  }

  &.collapsing {
    max-height: 15rem;
    transform: scaleY(1);
  }

  &.expanded {
    max-height: 15rem;
    transform: scaleY(1);
  }

  &.expanding {
    max-height: 0px;
    transform: scaleY(0);
  }
`;

export default function Accordion({ header, show, children, ...rest }: Props) {
  return (
    <div {...rest}>
      {header}
      <CSSTransition
        classNames={{
          enter: 'collapsed',
          enterActive: 'collapsing',
          exit: 'expanded',
          exitActive: 'expanding',
        }}
        timeout={300}
        in={show}
        unmountOnExit
      >
        <Wrapper>
          {children}
        </Wrapper>
      </CSSTransition>
    </div>
  );
}
