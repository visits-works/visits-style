"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _style = _interopRequireDefault(require("./style"));

var _utils = require("../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var InputWrapper = _styledComponents.default.div.withConfig({
  displayName: "Select__InputWrapper"
})(["display:inline-block;max-width:100%;position:relative;vertical-align:top;", " select{", " display:block;cursor:pointer;appearance:none;outline:none;max-width:100%;background-color:transparent;padding:0.375em 0.625em;", " ", " border-radius:4px;border:1px solid ", ";will-change:box-shadow;transition-property:box-shadow;transition-duration:0.15s;transition-timing-function:ease-in-out;option{padding:0.5em 1em;}&:hover{border-color:", ";}&:focus{outline:none;border-color:", ";", "}&::-ms-expand{display:none;}}&::after{", " right:1em;z-index:4;}"], function (_ref) {
  var multiple = _ref.multiple;
  return multiple ? '' : 'height: 2.25em;';
}, _style.default, function (_ref2) {
  var multiple = _ref2.multiple;
  return multiple ? '' : 'padding-right: 2.25em;';
}, (0, _utils.setSize)('font-size'), function (_ref3) {
  var theme = _ref3.theme;
  return theme.border;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.borderHover;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.primary;
}, function (_ref6) {
  var theme = _ref6.theme;
  return (0, _utils.boxShadow)('0.2em', theme.primary);
}, function (_ref7) {
  var theme = _ref7.theme;
  return (0, _utils.arrow)(theme.primary);
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
          options = _this$props.options,
          rest = _objectWithoutProperties(_this$props, ["options"]);

      return _react.default.createElement(InputWrapper, null, _react.default.createElement("select", rest, options.map(function (_ref8) {
        var id = _ref8.id,
            name = _ref8.name;
        return _react.default.createElement("option", {
          key: id,
          value: id
        }, name);
      })));
    }
  }]);

  return Select;
}(_react.PureComponent);

exports.default = Select;

_defineProperty(Select, "defaultProps", {
  name: null,
  placeholder: null,
  onChange: function onChange() {}
});

Select.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Select",
  "props": {
    "name": {
      "defaultValue": {
        "value": "null",
        "computed": false
      }
    },
    "placeholder": {
      "defaultValue": {
        "value": "null",
        "computed": false
      }
    },
    "onChange": {
      "defaultValue": {
        "value": "() => {}",
        "computed": false
      }
    }
  }
};