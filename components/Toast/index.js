import "core-js/modules/es6.object.assign";
import "core-js/modules/es6.string.fixed";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component, PureComponent } from 'react';
import { createPortal } from 'react-dom';
import CSSTransition from 'react-transition-group/CSSTransition';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import styled from '../../styled';
import Box from '../Box';
var Wrapper = styled(Box).withConfig({
  displayName: "Toast__Wrapper",
  componentId: "sc-8192b2-0"
})(["padding:0.375em 0.75em;max-width:100%;margin-bottom:1rem;z-index:9999;width:fit-content;transition-property:transform,opacity;transition-timing-function:cubic-bezier(0.645,0.045,0.355,1);transition-duration:250ms;&.move-enter{opacity:0.01;transform:scale(0.8);}&.move-enter-active{opacity:1;transform:scale(1);}&.move-exit{opacity:1;transform:scale(1);}&.move-exit-active{opacity:0.01;transform:scale(0.8);}"]);
export var ToastItem =
/*#__PURE__*/
function (_PureComponent) {
  _inheritsLoose(ToastItem, _PureComponent);

  function ToastItem() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = ToastItem.prototype;

  _proto.componentDidMount = function componentDidMount() {
    if (this.props.duration !== null) {
      setTimeout(this.props.clear, this.props.duration);
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        message = _this$props.message,
        color = _this$props.color,
        id = _this$props.id;
    return React.createElement(Wrapper, {
      borderless: true,
      color: color
    }, message);
  };

  return ToastItem;
}(PureComponent);

_defineProperty(ToastItem, "defaultProps", {
  duration: 5000
});

function setPosition(position, isFixed) {
  var base = "position: " + (isFixed ? 'fixed' : 'absolute') + "; z-index: 9999; display: flex; flex-direction: column; ";

  switch (position) {
    case 'bottom':
      {
        return base + 'bottom: 1rem; left: 50%; align-item: center; transform: translateX(-50%);';
      }

    case 'bottom-left':
      {
        return base + 'bottom: 1rem; left: 1rem; align-item: flex-start;';
      }

    case 'bottom-right':
      {
        return base + 'bottom: 1rem; right: 1rem; align-item: flex-end;';
      }

    case 'top':
      {
        return base + 'top: 1rem; left: 50%; align-items: center; transform: translateX(-50%);';
      }

    case 'top-left':
      {
        return base + 'top: 1rem; left: 1rem; align-items: flex-start;';
      }

    case 'top-right':
    default:
      {
        return base + 'top: 1rem; right: 1rem; align-items: flex-end;';
      }
  }
}

var ToastContainer =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(ToastContainer, _Component);

  function ToastContainer(_props) {
    var _this;

    _this = _Component.call(this, _props) || this;

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "clear", function (id) {
      return function () {
        _this.props.clear(id);
      };
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderToast", function () {
      var toasts = _this.props.toasts;
      return React.createElement(TransitionGroup, {
        component: null
      }, toasts.map(function (props) {
        return React.createElement(CSSTransition, {
          key: props.id,
          timeout: 250,
          classNames: "move",
          unmountOnExit: true
        }, React.createElement(ToastItem, _extends({
          key: props.id
        }, props, {
          clear: _this.clear(props.id)
        })));
      }));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "element", void 0);

    if (typeof document !== "undefined") {
      _this.element = document.createElement('div');
      _this.element.style.cssText = setPosition(_props.position, _props.fixed);
      document.body.appendChild(_this.element);
    }

    return _this;
  }

  var _proto2 = ToastContainer.prototype;

  _proto2.shouldComponentUpdate = function shouldComponentUpdate(props) {
    return props.toasts.length !== this.props.toasts.length || props.position !== this.props.position;
  };

  _proto2.getSnapshotBeforeUpdate = function getSnapshotBeforeUpdate(props) {
    if (props.position !== this.props.position) {
      this.element.style.cssText = setPosition(this.props.position);
    }
  };

  _proto2.componentWillUnmount = function componentWillUnmount() {
    if (this.element) document.body.removeChild(this.element);
  };

  _proto2.render = function render() {
    if (typeof document !== "undefined") {
      return createPortal(this.renderToast(), this.element);
    }

    return null;
  };

  return ToastContainer;
}(Component);

_defineProperty(ToastContainer, "defaultProps", {
  toasts: [],
  position: 'top-right',
  fixed: false
});

export { ToastContainer as default };