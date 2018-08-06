"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Toast = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDom = require("react-dom");

var _Transition = _interopRequireDefault(require("react-transition-group/Transition"));

var _TransitionGroup = _interopRequireDefault(require("react-transition-group/TransitionGroup"));

var _animejs = _interopRequireDefault(require("animejs"));

var _styled = _interopRequireDefault(require("../../styled"));

var _anime = require("../../utils/anime");

var _Box = _interopRequireDefault(require("../Box"));

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

var Wrapper = (0, _styled.default)(_Box.default).withConfig({
  displayName: "Toast__Wrapper"
})(["padding:0.375em 0.75em;max-width:100%;margin-bottom:1rem;width:fit-content;"]);

function animeToastIn(toast) {
  (0, _animejs.default)({
    targets: toast,
    translateX: ['100%', 0],
    complete: function complete() {
      return (0, _anime.dispatchAnimeDone)(toast);
    },
    easing: [0.645, 0.045, 0.355, 1],
    duration: 250
  });
}

function animeToastOut(toast) {
  (0, _animejs.default)({
    targets: toast,
    translateX: [0, '100%'],
    complete: function complete() {
      return (0, _anime.dispatchAnimeDone)(toast);
    },
    easing: [0.645, 0.045, 0.355, 1],
    duration: 250
  });
}

var Toast =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Toast, _PureComponent);

  function Toast() {
    _classCallCheck(this, Toast);

    return _possibleConstructorReturn(this, _getPrototypeOf(Toast).apply(this, arguments));
  }

  _createClass(Toast, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this = this;

      if (this.props.duration) {
        this.timer = setTimeout(function () {
          _this.props.clear();
        }, this.props.duration);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          message = _this$props.message,
          color = _this$props.color;
      return _react.default.createElement(Wrapper, {
        borderless: true,
        color: color
      }, message);
    }
  }]);

  return Toast;
}(_react.PureComponent);

exports.Toast = Toast;
Toast.defaultProps = {
  duration: 5000
};

var ToastContainer =
/*#__PURE__*/
function (_Component) {
  _inherits(ToastContainer, _Component);

  function ToastContainer(props) {
    var _this2;

    _classCallCheck(this, ToastContainer);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(ToastContainer).call(this, props));

    _this2.clear = function (id) {
      return function () {
        _this2.props.clear(id);
      };
    };

    _this2.renderToast = function () {
      var toasts = _this2.props.toasts;
      return _react.default.createElement(_TransitionGroup.default, {
        component: null
      }, toasts.map(function (props) {
        return _react.default.createElement(_Transition.default, {
          key: props.id,
          addEndListener: _anime.addAnimeListener,
          onEnter: animeToastIn,
          onExit: animeToastOut,
          timeout: 250,
          unmountOnExit: true
        }, _react.default.createElement(Toast, Object.assign({}, props, {
          clear: _this2.clear(props.id)
        })));
      }));
    };

    _this2.element = document.createElement('div'); // tslint:disable-next-line

    _this2.element.style.cssText = 'position: fixed; top: 1rem; right: 1rem; z-index: 9999; display: flex; flex-direction: column; align-items: flex-end;';
    document.body.appendChild(_this2.element);
    return _this2;
  }

  _createClass(ToastContainer, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.element) this.element.remove();
    }
  }, {
    key: "render",
    value: function render() {
      return (0, _reactDom.createPortal)(this.renderToast(), this.element);
    }
  }]);

  return ToastContainer;
}(_react.Component);

exports.default = ToastContainer;
ToastContainer.defaultProps = {
  toasts: []
};