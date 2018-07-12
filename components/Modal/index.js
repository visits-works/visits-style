"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactDom = require("react-dom");

var _Transition = _interopRequireDefault(require("react-transition-group/Transition"));

var _animejs = _interopRequireDefault(require("animejs"));

var _Card = _interopRequireDefault(require("../Card"));

var _Col = _interopRequireDefault(require("../Grid/Col"));

var _anime = require("../../utils/anime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var wrapperStyle = {
  width: '100%',
  height: '100%',
  position: 'fixed',
  top: 0,
  left: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};
var dropdownStyle = {
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.25)'
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

function getModal(_ref) {
  var show = _ref.show,
      size = _ref.size,
      title = _ref.title,
      children = _ref.children,
      footer = _ref.footer,
      color = _ref.color,
      closeModal = _ref.closeModal;
  if (!show) return null;
  return React.createElement("div", {
    style: wrapperStyle
  }, React.createElement("div", {
    style: dropdownStyle,
    onClick: closeModal
  }), React.createElement(_Transition.default, {
    addEndListener: _anime.addAnimeListener,
    onEnter: animeModalIn,
    timeout: 200,
    in: show,
    appear: true
  }, React.createElement(_Col.default, {
    size: size || 6,
    role: "dialog",
    style: {
      alignItems: 'center'
    }
  }, React.createElement(_Card.default, {
    title: title,
    footer: footer,
    color: color
  }, children))));
}

var Modal =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Modal, _React$Component);

  function Modal(props) {
    var _this;

    _classCallCheck(this, Modal);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Modal).call(this, props));
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
      return (0, _reactDom.createPortal)(getModal(this.props), this.element);
    }
  }]);

  return Modal;
}(React.Component);

exports.default = Modal;
Modal.defaultProps = {
  domId: 'modal',
  show: false,
  color: 'white'
};