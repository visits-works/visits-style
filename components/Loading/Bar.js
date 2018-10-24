function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { PureComponent } from 'react';
import styled from '../../styled';
import CSSTransition from 'react-transition-group/CSSTransition';
var Wrapper = styled.div.withConfig({
  displayName: "Bar__Wrapper",
  componentId: "wnou71-0"
})(["position:", ";background-color:", ";top:0;left:0;width:100%;"], function (_ref) {
  var position = _ref.position;
  return position;
}, function (_ref2) {
  var background = _ref2.background;
  return background;
});
export var Bar = styled.div.withConfig({
  displayName: "Bar",
  componentId: "wnou71-1"
})(["height:", ";background-color:", ";will-change:width,opacity;z-index:1000000;transition-property:width,opacity;transition-duration:", "ms;transition-timing-function:linear;&.load-enter{width:0;}&.load-enter-done{width:85%;}&.load-exit{width:85%;}&.load-exit-active{width:100%;opacity:0;}"], function (_ref3) {
  var size = _ref3.size;
  return size;
}, function (_ref4) {
  var color = _ref4.color,
      theme = _ref4.theme;
  return theme[color];
}, function (_ref5) {
  var duration = _ref5.duration;
  return duration;
});

var LoadingBar =
/*#__PURE__*/
function (_PureComponent) {
  _inheritsLoose(LoadingBar, _PureComponent);

  function LoadingBar() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = LoadingBar.prototype;

  _proto.render = function render() {
    return React.createElement(Wrapper, this.props, React.createElement(CSSTransition, {
      classNames: "load",
      timeout: this.props.duration,
      in: this.props.loading,
      unmountOnExit: true
    }, React.createElement(Bar, this.props)));
  };

  return LoadingBar;
}(PureComponent);

_defineProperty(LoadingBar, "defaultProps", {
  loading: false,
  color: 'primary',
  position: 'absolute',
  background: 'transparent',
  size: '3px',
  duration: 150
});

export { LoadingBar as default };