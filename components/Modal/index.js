"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _Transition = _interopRequireDefault(require("react-transition-group/Transition"));

var _animejs = _interopRequireDefault(require("animejs"));

var _Card = _interopRequireDefault(require("../Card"));

var _Col = _interopRequireDefault(require("../Grid/Col"));

var _anime = require("../../utils/anime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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
var colStyle = {
  zIndex: 9999,
  padding: '1rem',
  margin: 'auto'
};

function animeModalIn(modal) {
  (0, _animejs.default)({
    targets: modal,
    scale: [0.8, 1],
    opacity: [0, 1],
    complete: function complete() {
      return (0, _anime.dispatchAnimeDone)(modal);
    },
    easing: [0.645, 0.045, 0.355, 1],
    duration: 200
  });
}

var Modal =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Modal, _React$Component);

  function Modal(props) {
    var _this;

    _classCallCheck(this, Modal);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Modal).call(this, props));

    _this.onKeyDown = function (e) {
      if (_this.props.closeOnEsc && e.keyCode === ESC_KEY && _this.props.closeModal) {
        _this.props.closeModal();
      }
    };

    _this.onClickOverlay = function () {
      if (_this.shouldClose === null) {
        _this.shouldClose = true;
      }

      if (_this.shouldClose && _this.props.closeOnOverlay && _this.props.closeModal) {
        _this.props.closeModal();
      }

      _this.shouldClose = null;
    };

    _this.handleContentOnMouse = function () {
      _this.shouldClose = false;
    };

    _this.getModal = function () {
      var _this$props = _this.props,
          show = _this$props.show,
          size = _this$props.size,
          title = _this$props.title,
          children = _this$props.children,
          footer = _this$props.footer,
          color = _this$props.color;
      if (!show) return;
      return _react.default.createElement("div", {
        style: wrapperStyle,
        onClick: _this.onClickOverlay,
        "aria-modal": "true"
      }, _react.default.createElement(_Transition.default, {
        addEndListener: _anime.addAnimeListener,
        onEnter: animeModalIn,
        timeout: 200,
        in: show,
        appear: true,
        unmountOnExit: true
      }, _react.default.createElement(_Col.default, {
        size: size || 6,
        role: "dialog",
        style: colStyle,
        onMouseUp: _this.handleContentOnMouse,
        onMouseDown: _this.handleContentOnMouse,
        auto: true
      }, _react.default.createElement(_Card.default, {
        title: title,
        footer: footer,
        color: color
      }, children))));
    };

    _this.shouldClose = null;
    _this.element = document.createElement('div');
    _this.element.id = props.domId || 'modal';
    document.body.appendChild(_this.element);
    return _this;
  }

  _createClass(Modal, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(props) {
      return this.props.show !== props.show;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.props.domId) {
        this.element.remove();
      }
    }
  }, {
    key: "render",
    value: function render() {
      return (0, _reactDom.createPortal)(this.getModal(), this.element);
    }
  }]);

  return Modal;
}(_react.default.Component);

exports.default = Modal;
Modal.defaultProps = {
  domId: 'modal',
  show: false,
  color: 'white'
};