import React, { HTMLAttributes } from 'react';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import { CSSType } from '../../types';

interface Props extends HTMLAttributes<HTMLDivElement> {
  show: boolean;
  header: any;
  css?: CSSType;
}

const Wrapper = styled.div`
  & > .__content {
    transform-origin: top;
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
  }

  ${({ css }: { css?: CSSType }) => css || {}}
`;

export default function Accordion({ header, show, children, ...rest }: Props) {
  return (
    <Wrapper {...rest}>
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
        <div className="__content">
          {children}
        </div>
      </CSSTransition>
    </Wrapper>
  );
}
