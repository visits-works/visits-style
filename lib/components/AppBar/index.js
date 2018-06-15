"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.AppBar = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _variables = require("../../styles/variables");

var _utils = require("../../utils");

var _Container = _interopRequireDefault(require("../Grid/Container"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-basis: auto;\n  flex-grow: 1;\n\n  transform-origin: center;\n  transition-duration: 100ms;\n  transition-property: transform;\n  transition-timing-function: ease-out;\n\n  & > ul {\n    display: flex;\n    flex-direction: row;\n    list-style: none;\n\n    li {\n      padding: .5rem 1rem;\n    }\n\n    a {\n      ", "\n      transform: color 100ms ease-out;\n      &:hover, &.active {\n        color ", ";\n      }\n    }\n  }\n\n  & > div, & > span, & > form {\n    display: flex;\n    ", "\n  }\n\n  @media (max-width: ", "px) {\n    ", "\n    width: 100%;\n    flex-direction: column;\n    align-items: flex-start;\n\n    padding-bottom: 0.5rem;\n\n    & > ul {\n      flex-direction: column;\n      width: 100%;\n      li {\n        padding: .5rem 0;\n      }\n    }\n\n    & > div, & > span, & > form {\n      padding: .5rem 0;\n      width: 100%;\n    }\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  cursor: pointer;\n  white-space: nowrap;\n  padding: .5rem 1rem;\n\n  &:hover{\n    background-color: rgba(0, 0, 0, .05);\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  display: none;\n  margin-left: auto;\n  border: none;\n  background-color: transparent;\n\n  outline: none;\n\n  &:hover{\n    background-color: rgba(0, 0, 0, .05);\n  }\n\n  @media (max-width: ", "px) {\n    display: block;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: stretch;\n\n  min-height: 3.25rem;\n  width: 100%;\n  z-index: 30;\n\n  ", "\n  ", "\n\n  @media (max-width: ", "px) {\n    padding: ", ";\n  }\n\n  @media (max-width: ", "px) {\n    padding: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var NavBar = function () {
  var c = _styledComponents.default.header(_templateObject(), function (_ref) {
    var background = _ref.background;
    return background ? "background-color: ".concat(background, ";") : '';
  }, function (_ref2) {
    var color = _ref2.color;
    return color ? "color: ".concat(color, ";") : '';
  }, _variables.fullhd, function (_ref3) {
    var fluid = _ref3.fluid;
    return fluid ? '0 0.75rem' : '0 5%';
  }, _variables.tablet, function (_ref4) {
    var fluid = _ref4.fluid;
    return fluid ? '0 0.5rem' : '0 3%';
  });

  c.identifier = "NavBar-trc3mq";
  c.displayName = "NavBar";
  return c;
}();

var Burger = function () {
  var c = _styledComponents.default.button(_templateObject2(), (0, _utils.hambuger)('3.25rem'), _variables.mobile);

  c.identifier = "Burger-k23lk0";
  c.displayName = "Burger";
  return c;
}();

var Brand = function () {
  var c = _styledComponents.default.a(_templateObject3());

  c.identifier = "Brand-jh908c";
  c.displayName = "Brand";
  return c;
}();

var NavContent = function () {
  var c = _styledComponents.default.div(_templateObject4(), function (_ref5) {
    var color = _ref5.color;
    return color ? "color: ".concat(color, ";") : '';
  }, function (_ref6) {
    var theme = _ref6.theme;
    return theme.primary;
  }, function (_ref7) {
    var color = _ref7.color;
    return color ? "color: ".concat(color, ";") : '';
  }, _variables.mobile, function (_ref8) {
    var show = _ref8.show;
    return show ? '' : 'display: none;';
  });

  c.identifier = "NavContent-hlvyzp";
  c.displayName = "NavContent";
  return c;
}();

var AppBar =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(AppBar, _PureComponent);

  function AppBar() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, AppBar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AppBar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      show: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "toggleMenu", function () {
      _this.setState({
        show: !_this.state.show
      });
    });

    return _this;
  }

  _createClass(AppBar, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          color = _this$props.color,
          brand = _this$props.brand,
          children = _this$props.children,
          to = _this$props.to,
          style = _this$props.style;
      var show = this.state.show;
      var backgroundColor = color === 'light' ? theme.whiteTer : theme[color] || 'transparent';
      var textColor = backgroundColor === 'transparent' ? null : (0, _utils.findColorInvert)(backgroundColor);
      return _react.default.createElement(NavBar, {
        background: backgroundColor,
        color: textColor,
        role: "navigation",
        style: style
      }, brand && _react.default.createElement(Brand, {
        href: to
      }, brand), children && _react.default.createElement(_react.Fragment, null, _react.default.createElement(Burger, {
        className: show ? 'active' : '',
        onClick: this.toggleMenu
      }, _react.default.createElement("span", null), _react.default.createElement("span", null), _react.default.createElement("span", null)), _react.default.createElement(NavContent, {
        color: textColor,
        show: show
      }, children)));
    }
  }]);

  return AppBar;
}(_react.PureComponent);

exports.AppBar = AppBar;

_defineProperty(AppBar, "defaultProps", {
  color: null,
  brand: null,
  to: null,
  fixed: false,
  fluid: false,
  style: null
});

var _default = (0, _styledComponents.withTheme)(AppBar);

exports.default = _default;