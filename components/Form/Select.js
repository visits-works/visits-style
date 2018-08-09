"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styled = _interopRequireDefault(require("../../styled"));

var _style = _interopRequireDefault(require("./style"));

var _arrow = _interopRequireDefault(require("../../utils/arrow"));

var _setSize = _interopRequireDefault(require("../../utils/setSize"));

var _HelpMessage = _interopRequireDefault(require("./HelpMessage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var InputWrapper = _styled.default.div.withConfig({
  displayName: "Select__InputWrapper"
})(["position:relative;display:block;select{", " display:block;cursor:pointer;appearance:none;outline:none;max-width:100%;width:100%;background-color:transparent;padding:0.375em 0.625em;", " border:none;", " will-change:box-shadow;transition-property:box-shadow;transition-duration:150ms;transition-timing-function:ease-in-out;&:focus{border-color:", ";", "}&::-ms-expand{display:none;}&:-moz-focusring{color:transparent;text-shadow:0 0 0 #000;}}&::after{", " top:1.25em;right:0.625em;z-index:4;}", ""], _style.default, function (_ref) {
  var size = _ref.size;
  return (0, _setSize.default)('font-size', size);
}, function (_ref2) {
  var outline = _ref2.outline,
      theme = _ref2.theme,
      error = _ref2.error;
  return outline ? "border: 1px solid ".concat(error ? theme.danger : theme.border, "; border-radius: 4px;") : "border-bottom: 1px solid ".concat(error ? theme.danger : theme.border, "; border-radius: 0;");
}, function (_ref3) {
  var error = _ref3.error,
      theme = _ref3.theme;
  return error ? theme.danger : theme.primary;
}, function (_ref4) {
  var theme = _ref4.theme,
      outline = _ref4.outline,
      error = _ref4.error;
  return outline ? "box-shadow: 0 0 0 0.1em ".concat(error ? theme.danger : theme.primary, ";") : "box-shadow: 0 0.1em ".concat(error ? theme.danger : theme.primary, ";");
}, function (_ref5) {
  var theme = _ref5.theme;
  return (0, _arrow.default)(theme.border);
}, function (_ref6) {
  var theme = _ref6.theme,
      disabled = _ref6.disabled;
  return disabled ? '' : "\n    &:hover {\n      select:not(:disabled):not(:focus) {\n        border-color: ".concat(theme.borderHover, ";\n      }\n\n      &::after {\n        border-color: ").concat(theme.borderHover, ";\n      }\n    }\n  ");
});

var Select =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Select, _PureComponent);

  function Select() {
    _classCallCheck(this, Select);

    return _possibleConstructorReturn(this, _getPrototypeOf(Select).apply(this, arguments));
  }

  _createClass(Select, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          size = _this$props.size,
          outline = _this$props.outline,
          options = _this$props.options,
          error = _this$props.error,
          help = _this$props.help,
          placeholder = _this$props.placeholder,
          disabled = _this$props.disabled,
          rest = _objectWithoutProperties(_this$props, ["size", "outline", "options", "error", "help", "placeholder", "disabled"]);

      return _react.default.createElement(InputWrapper, {
        size: size,
        outline: outline,
        error: error,
        disabled: disabled
      }, _react.default.createElement("select", Object.assign({}, rest, {
        disabled: disabled
      }), placeholder && _react.default.createElement("option", {
        disabled: true,
        selected: true
      }, placeholder), options.map(function (_ref7) {
        var id = _ref7.id,
            name = _ref7.name;
        return _react.default.createElement("option", {
          key: id,
          value: id
        }, name);
      })), (0, _HelpMessage.default)(help, error));
    }
  }]);

  return Select;
}(_react.PureComponent);

exports.default = Select;
Select.defaultProps = {
  name: null,
  onChange: function onChange() {},
  options: []
};