import React, { PureComponent } from 'react';
import styled, { ThemeType } from '../../styled';
import CSSTransition from 'react-transition-group/CSSTransition';

export const Bar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 3px;
  transform: scaleX(0);
  transform-origin: left;
  width: 100%;
  background: ${({ theme }) => theme.primary};

  will-change: transform, opacity;
  z-index: 1000000;

  transition-property: transform, opacity;
  transition-duration: 150ms;
  transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);

  &.start {
    transform: scaleX(0.8);
  }

  &.end {
    transform: scaleX(1);
    opacity: 0;
  }
`;

interface Props {
  loading: boolean;
}

export default class LoadingBar extends PureComponent<Props> {
  static defaultProps = {
    loading: false,
  }

  render() {
    return (
      <CSSTransition
        classNames={{
          appear: 'start',
          enterDone: 'start',
          exit: 'end',
        }}
        timeout={200}
        in={this.props.loading}
        unmountOnExit
      >
        <Bar />
      </CSSTransition>
    );
  }
}
