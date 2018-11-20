import React, { PureComponent } from 'react';
import styled from 'styled-components';
import CSSTransition from 'react-transition-group/CSSTransition';
const Wrapper = styled.div `
  position: ${({ position }) => position};
  background-color: ${({ background }) => background};
  top: 0;
  left: 0;
  width: 100%;
`;
export const Bar = styled.div `
  height: ${({ size }) => size};
  background-color: ${({ color, theme }) => theme[color]};

  will-change: width, opacity;
  z-index: 1000000;

  transition-property: width, opacity;
  transition-duration: ${({ duration }) => duration}ms;
  transition-timing-function: linear;

  &.load-enter {
    width: 0;
  }

  &.load-enter-done {
    width: 85%;
  }

  &.load-exit {
    width: 85%;
  }

  &.load-exit-active {
    width: 100%;
    opacity: 0;
  }
`;
export default class LoadingBar extends PureComponent {
    render() {
        return (React.createElement(Wrapper, Object.assign({}, this.props),
            React.createElement(CSSTransition, { classNames: "load", timeout: this.props.duration, in: this.props.loading, unmountOnExit: true },
                React.createElement(Bar, Object.assign({}, this.props)))));
    }
}
LoadingBar.defaultProps = {
    loading: false,
    color: 'primary',
    position: 'absolute',
    background: 'transparent',
    size: '3px',
    duration: 150,
};
