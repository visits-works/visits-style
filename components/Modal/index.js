function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { PureComponent } from 'react';
import { createPortal } from 'react-dom';
import CSSTransition from 'react-transition-group/CSSTransition';
import styled from '../../styled';
import Box from '../Box';
import Col from '../Grid/Col';
var ESC_KEY = 27;
var wrapperStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  zIndex: 9997,
  overflowY: 'scroll',
  backgroundColor: 'rgba(30, 30, 30, 0.9)'
};
var Wrapper = styled.div.withConfig({
  displayName: "Modal__Wrapper",
  componentId: "pb7lhx-0"
})(["& > ", "{transition-property:transform,opacity;transition-timing-function:cubic-bezier(0.645,0.045,0.355,1);transition-duration:200ms;}&.fade-enter > ", "{opacity:0.01;transform:scale(0.8);}&.fade-enter-active > ", "{opacity:1;transform:scale(1);}&.fade-exit > ", "{opacity:1;transform:scale(1);}&.fade-exit-active > ", "{opacity:0.01;transform:scale(0.8);}"], Col, Col, Col, Col, Col);
var colStyle = {
  zIndex: 9999,
  padding: '1rem',
  margin: 'auto'
};

var Modal =
/*#__PURE__*/
function (_PureComponent) {
  _inheritsLoose(Modal, _PureComponent);

  function Modal(props) {
    var _this;

    _this = _PureComponent.call(this, props) || this;

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onKeyDown", function (e) {
      if (_this.props.closeOnEsc && e.keyCode === ESC_KEY && _this.props.closeModal) {
        _this.props.closeModal();
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onClickOverlay", function () {
      if (_this.shouldClose === null) {
        _this.shouldClose = true;
      }

      if (_this.shouldClose && _this.props.closeOnOverlay && _this.props.closeModal) {
        _this.props.closeModal();
      }

      _this.shouldClose = null;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleContentOnMouse", function () {
      _this.shouldClose = false;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getModal", function () {
      var _this$props = _this.props,
          show = _this$props.show,
          size = _this$props.size,
          title = _this$props.title,
          children = _this$props.children,
          footer = _this$props.footer,
          color = _this$props.color,
          style = _this$props.style;
      return React.createElement(CSSTransition, {
        classNames: "fade",
        timeout: 200,
        in: show,
        unmountOnExit: true
      }, React.createElement(Wrapper, {
        style: wrapperStyle,
        onClick: _this.onClickOverlay,
        "aria-modal": "true"
      }, React.createElement(Col, {
        size: size || 6,
        role: "dialog",
        style: colStyle,
        onMouseUp: _this.handleContentOnMouse,
        onMouseDown: _this.handleContentOnMouse,
        auto: true
      }, React.createElement(Box, {
        color: color
      }, title && React.createElement("header", null, title), React.createElement("main", {
        style: style
      }, children), footer && React.createElement("footer", null, footer)))));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "element", void 0);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "shouldClose", null);

    if (typeof document !== "undefined") {
      _this.element = document.createElement('div');
      _this.element.id = props.domId || 'modal';
      document.body.appendChild(_this.element);
    }

    return _this;
  }

  var _proto = Modal.prototype;

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.props.domId) {
      this.element.remove();
    }
  };

  _proto.render = function render() {
    if (typeof document !== "undefined") {
      return createPortal(this.getModal(), this.element);
    }

    return null;
  };

  return Modal;
}(PureComponent);

_defineProperty(Modal, "defaultProps", {
  domId: 'modal',
  show: false,
  color: 'white'
});

export { Modal as default };