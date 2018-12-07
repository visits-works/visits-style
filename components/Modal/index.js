function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { PureComponent } from 'react';
import { createPortal } from 'react-dom';
import CSSTransition from 'react-transition-group/CSSTransition';
import styled from 'styled-components';
import Box from '../Box';
import Col from '../Grid/Col';
var ESC_KEY = 27;
var Wrapper =
/*#__PURE__*/
styled.div.withConfig({
  displayName: "Modal__Wrapper",
  componentId: "pb7lhx-0"
})(["position:fixed;top:0;left:0;right:0;bottom:0;display:flex;align-items:center;z-index:9997;overflow-y:scroll;background-color:rgba(30,30,30,0.9);& > ", "{z-index:9999;padding:1rem;margin:auto;transition-property:transform,opacity;transition-timing-function:cubic-bezier(0.645,0.045,0.355,1);transition-duration:200ms;}&.fade-enter > ", "{opacity:0.01;transform:scale(0.8);}&.fade-enter-active > ", "{opacity:1;transform:scale(1);}&.fade-exit > ", "{opacity:1;transform:scale(1);}&.fade-exit-active > ", "{opacity:0.01;transform:scale(0.8);}", ""], Col, Col, Col, Col, Col, function (_ref) {
  var css = _ref.css;
  return css || '';
});

var Modal =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Modal, _PureComponent);

  function Modal(props) {
    var _this;

    _classCallCheck(this, Modal);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Modal).call(this, props));

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
          style = _this$props.style,
          onClick = _this$props.onClick,
          rest = _objectWithoutProperties(_this$props, ["show", "size", "title", "children", "footer", "color", "style", "onClick"]);

      return React.createElement(CSSTransition, {
        classNames: "fade",
        timeout: 200,
        in: show,
        unmountOnExit: true
      }, React.createElement(Wrapper, _extends({
        onClick: _this.onClickOverlay,
        "aria-modal": "true"
      }, rest), React.createElement(Col, {
        size: size || 6,
        role: "dialog",
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

  _createClass(Modal, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.props.domId && this.element) {
        document.body.removeChild(this.element);
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (this.element) {
        return createPortal(this.getModal(), this.element);
      }

      return null;
    }
  }]);

  return Modal;
}(PureComponent);

_defineProperty(Modal, "defaultProps", {
  domId: 'modal',
  show: false,
  color: 'white'
});

export { Modal as default };