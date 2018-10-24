function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component } from 'react';
import styled from '../../styled';
import CSSTransition from 'react-transition-group/CSSTransition';
import Button from '../Button';
import Box from '../Box';
var Tooltip = styled(Box).withConfig({
  displayName: "Popover__Tooltip",
  componentId: "sc-1huajr8-0"
})(["position:absolute;display:flex;clear:both;background-color:white;box-shadow:0 1px 2px 0 rgba(0,0,0,0.05);z-index:9999;padding:0.5rem 0;width:auto;height:auto;cursor:default;will-change:transform,opacity;transform:scale(0.8);opacity:0;transition-property:transform,opacity;transition-duration:100ms;transition-timing-function:cubic-bezier(0.645,0.045,0.355,1);&.start{transform:scale(1);opacity:1;}&.end{transform:scale(0.8);opacity:0;}"]);

function getPosition(position) {
  switch (position) {
    case 'top-left':
      {
        return {
          top: 0,
          left: 0,
          transform: 'translateY(-100%)'
        };
      }

    case 'top-right':
      {
        return {
          top: 0,
          right: 0,
          transform: 'translateY(-100%)'
        };
      }

    case 'top':
      {
        return {
          top: 0,
          left: '50%',
          transform: 'translate(-50%, -100%)'
        };
      }

    case 'bottom-left':
      {
        return {
          bottom: 0,
          left: 0,
          transform: 'translateY(100%)'
        };
      }

    case 'bottom-right':
      {
        return {
          bottom: 0,
          right: 0,
          transform: 'translateY(100%)'
        };
      }

    case 'bottom':
      {
        return {
          bottom: 0,
          left: '50%',
          transform: 'translate(-50%, 100%)'
        };
      }

    default:
      {
        return {
          top: 0,
          left: 0,
          transform: 'translateY(100%)'
        };
      }
  }
}

var Popover =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(Popover, _Component);

  function Popover() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      show: false,
      style: {}
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "openDropdown", function () {
      if (_this.state.show) return;
      var style = getPosition(_this.props.position);

      _this.setState({
        style: style,
        show: true
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "closeDropdown", function () {
      if (_this.state.show) _this.setState({
        show: false
      });
    });

    return _this;
  }

  var _proto = Popover.prototype;

  _proto.shouldComponentUpdate = function shouldComponentUpdate(props, state) {
    return this.state.show !== state.show || this.props.label !== props.label;
  };

  _proto.render = function render() {
    var _this$props = this.props,
        label = _this$props.label,
        color = _this$props.color,
        size = _this$props.size,
        children = _this$props.children;
    var _this$state = this.state,
        show = _this$state.show,
        style = _this$state.style;
    return React.createElement(Button, {
      color: color || 'text',
      size: size,
      onFocus: this.openDropdown,
      onBlur: this.closeDropdown,
      style: {
        display: 'block',
        position: 'relative'
      }
    }, label, React.createElement(CSSTransition, {
      classNames: {
        appear: 'start',
        enterDone: 'start',
        exit: 'end'
      },
      in: show,
      timeout: 150,
      unmountOnExit: true
    }, React.createElement(Tooltip, {
      style: style
    }, children)));
  };

  return Popover;
}(Component);

_defineProperty(Popover, "defaultProps", {
  position: 'bottom-left'
});

export { Popover as default };