function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { PureComponent } from 'react';
import styled from '../../styled';
import CSSTransition from 'react-transition-group/CSSTransition';
const Wrapper = styled.div.withConfig({
  displayName: "Bar__Wrapper",
  componentId: "wnou71-0"
})(["position:", ";background-color:", ";top:0;left:0;width:100%;"], ({
  position
}) => position, ({
  background
}) => background);
export const Bar = styled.div.withConfig({
  displayName: "Bar",
  componentId: "wnou71-1"
})(["height:", ";background-color:", ";will-change:width,opacity;z-index:1000000;transition-property:width,opacity;transition-duration:", "ms;transition-timing-function:linear;&.load-enter{width:0;}&.load-enter-done{width:85%;}&.load-exit{width:85%;}&.load-exit-active{width:100%;opacity:0;}"], ({
  size
}) => size, ({
  color,
  theme
}) => theme[color], ({
  duration
}) => duration);
export default class LoadingBar extends PureComponent {
  render() {
    return React.createElement(Wrapper, this.props, React.createElement(CSSTransition, {
      classNames: "load",
      timeout: this.props.duration,
      in: this.props.loading,
      unmountOnExit: true
    }, React.createElement(Bar, this.props)));
  }

}

_defineProperty(LoadingBar, "defaultProps", {
  loading: false,
  color: 'primary',
  position: 'absolute',
  background: 'transparent',
  size: '3px',
  duration: 150
});