"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styled = _interopRequireWildcard(require("../../styled"));

var _boxShadow = _interopRequireDefault(require("../../utils/boxShadow"));

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

var Wrapper = _styled.default.div.withConfig({
  displayName: "Field__Wrapper"
})(["display:block;&:not(:last-child){margin-bottom:0.75rem;}"]);

var Label = _styled.default.label.withConfig({
  displayName: "Field__Label"
})(["color:", ";display:block;font-size:1rem;font-weight:700;margin-bottom:0.325rem;"], function (_ref) {
  var theme = _ref.theme;
  return theme.textStrong;
});

var InputControl = _styled.default.div.withConfig({
  displayName: "Field__InputControl"
})(["span{font-size:0.75em;display:block;}", ""], function (_ref2) {
  var error = _ref2.error,
      theme = _ref2.theme;
  return error ? (0, _styled.css)(["input,select,textarea{border-color:", ";&:hover{border-color:", ";}&:focus{border-color:", ";", "}}span{color:", ";}"], theme.danger, theme.danger, theme.danger, (0, _boxShadow.default)('0.1em', theme.danger), theme.danger) : '';
});

var Field =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Field, _PureComponent);

  function Field() {
    _classCallCheck(this, Field);

    return _possibleConstructorReturn(this, _getPrototypeOf(Field).apply(this, arguments));
  }

  _createClass(Field, [{
    key: "renderMessage",
    value: function renderMessage() {
      var _this$props = this.props,
          error = _this$props.error,
          help = _this$props.help;

      if (error) {
        return _react.default.createElement("span", {
          className: "error"
        }, error);
      }

      if (help) {
        return _react.default.createElement("span", null, help);
      }

      return null;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          label = _this$props2.label,
          children = _this$props2.children,
          error = _this$props2.error;
      return _react.default.createElement(Wrapper, null, label && _react.default.createElement(Label, null, label), _react.default.createElement(InputControl, {
        error: error
      }, children, this.renderMessage()));
    }
  }]);

  return Field;
}(_react.PureComponent);

exports.default = Field;