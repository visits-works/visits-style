"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Bar = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _CSSTransition = _interopRequireDefault(require("react-transition-group/CSSTransition"));

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

var Bar = _styledComponents.default.div.withConfig({
  displayName: "Bar"
})(["position:absolute;top:0;left:0;height:3px;transform:scaleX(0);transform-origin:left;width:100%;background:", ";will-change:transform,opacity;z-index:1000000;transition-property:transform,opacity;transition-duration:150ms;transition-timing-function:cubic-bezier(0.645,0.045,0.355,1);&.start{transform:scaleX(0.8);}&.end{transform:scaleX(1);opacity:0;}"], function (_ref) {
  var theme = _ref.theme;
  return theme.primary;
});

exports.Bar = Bar;

var LoadingBar =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(LoadingBar, _PureComponent);

  function LoadingBar() {
    _classCallCheck(this, LoadingBar);

    return _possibleConstructorReturn(this, _getPrototypeOf(LoadingBar).apply(this, arguments));
  }

  _createClass(LoadingBar, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_CSSTransition.default, {
        classNames: {
          appear: 'start',
          enterDone: 'start',
          exit: 'end'
        },
        timeout: 200,
        in: this.props.loading,
        unmountOnExit: true
      }, _react.default.createElement(Bar, null));
    }
  }]);

  return LoadingBar;
}(_react.PureComponent);

exports.default = LoadingBar;
LoadingBar.defaultProps = {
  loading: false
};