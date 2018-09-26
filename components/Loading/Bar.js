function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { PureComponent } from 'react';
import styled from '../../styled';
import CSSTransition from 'react-transition-group/CSSTransition';
export const Bar = styled.div.withConfig({
  displayName: "Bar",
  componentId: "wnou71-0"
})(["position:absolute;top:0;left:0;height:3px;transform:scaleX(0);transform-origin:left;width:100%;background:", ";will-change:transform,opacity;z-index:1000000;transition-property:transform,opacity;transition-duration:150ms;transition-timing-function:cubic-bezier(0.645,0.045,0.355,1);&.start{transform:scaleX(0.8);}&.end{transform:scaleX(1);opacity:0;}"], ({
  theme
}) => theme.primary);
export default class LoadingBar extends PureComponent {
  render() {
    return React.createElement(CSSTransition, {
      classNames: {
        appear: 'start',
        enterDone: 'start',
        exit: 'end'
      },
      timeout: 200,
      in: this.props.loading,
      unmountOnExit: true
    }, React.createElement(Bar, null));
  }

}

_defineProperty(LoadingBar, "defaultProps", {
  loading: false
});