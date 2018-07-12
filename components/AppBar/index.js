"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _transparentize = _interopRequireDefault(require("polished/lib/color/transparentize"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _findColorInvert = _interopRequireDefault(require("../../utils/findColorInvert"));

var _hambuger = _interopRequireDefault(require("../../utils/hambuger"));

var _media = require("../../utils/media");

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

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n    flex-direction: column;\n    align-items: flex-start;\n\n    padding-bottom: 0.5rem;\n\n    button:not(.active)+& {\n      display:none;\n    }\n\n    & > ul {\n      flex-direction: column;\n      width: 100%;\n      li {\n        padding: .5rem 0;\n      }\n    }\n\n    & > div, & > span, & > form {\n      padding: .5rem 0;\n      width: 100%;\n    }\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral([" display: block; "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["padding: ", ";"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["padding: ", ";"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function setColor(_ref) {
  var color = _ref.color,
      theme = _ref.theme,
      backdrop = _ref.backdrop;
  var backgroundColor = color ? color === 'light' ? theme.color.greyLight : theme[color] : 'transparent';
  var textColor = (0, _findColorInvert.default)(backgroundColor === 'transparent' ? theme.background : backgroundColor);

  if (backdrop) {
    var backColor = (0, _transparentize.default)(0.2, backgroundColor === 'transparent' ? '#fff' : backgroundColor);
    var ua = navigator.userAgent.toLowerCase();

    if (ua.indexOf('safari') > -1 && ua.indexOf('chrome') === -1) {
      return "background-color: ".concat(backColor, "; color: ").concat(textColor, "; backdrop-filter: blur(8px);");
    }

    return (0, _styledComponents.css)(["background-color:", ";color:", ";"], backColor, textColor);
  }

  return "background-color: ".concat(backgroundColor, "; color: ").concat(textColor, ";");
}

function setAlign(_ref2) {
  var align = _ref2.align;

  switch (align) {
    case 'left':
      return 'flex-start';

    case 'right':
      return 'flex-end';

    default:
      return 'space-evenly';
  }
}

var NavBar = _styledComponents.default.header.withConfig({
  displayName: "AppBar__NavBar"
})(["position:", ";display:flex;flex-wrap:wrap;align-items:center;justify-content:stretch;top:-1px;min-height:3.25rem;width:100%;z-index:30;", " a{color:inherit;}", " ", ""], function (_ref3) {
  var fixed = _ref3.fixed,
      sticky = _ref3.sticky;
  return !(sticky || fixed) ? 'relative' : fixed ? 'fixed' : 'sticky';
}, setColor, (0, _media.mediaTablet)(_templateObject(), function (_ref4) {
  var fluid = _ref4.fluid;
  return fluid ? '0 0.5rem' : '0 3%';
}), (0, _media.mediaUntilFullHD)(_templateObject2(), function (_ref5) {
  var fluid = _ref5.fluid;
  return fluid ? '0 0.75rem' : '0 5%';
}));

var Burger = _styledComponents.default.button.withConfig({
  displayName: "AppBar__Burger"
})(["", " display:none;margin-left:auto;border:none;background-color:transparent;color:inherit;outline:none;&:hover{background-color:rgba(0,0,0,.05);}", ""], (0, _hambuger.default)('3.25rem'), (0, _media.mediaMobile)(_templateObject3()));

var NavContent = _styledComponents.default.div.withConfig({
  displayName: "AppBar__NavContent"
})(["display:flex;justify-content:space-between;align-items:center;flex-basis:auto;flex-grow:1;& > ul{display:flex;flex-direction:row;list-style:none;flex-grow:1;justify-content:", ";}& > div,& > span,& > form{display:flex;", "}", ""], setAlign, function (_ref6) {
  var color = _ref6.color;
  return color ? "color: ".concat(color, ";") : '';
}, (0, _media.mediaMobile)(_templateObject4()));

var NavItem = _styledComponents.default.li.withConfig({
  displayName: "AppBar__NavItem"
})(["text-align:center;a{display:block;padding:.5rem 1rem;color:inherit;opacity:1;will-change:opacity;transition:opacity 200ms cubic-bezier(0.645,0.045,0.355,1);&:hover,&.active{opacity:0.65;}}"]);

var AppBar =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(AppBar, _React$PureComponent);

  function AppBar() {
    var _this;

    _classCallCheck(this, AppBar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AppBar).apply(this, arguments));
    _this.state = {
      show: false
    };

    _this.toggleMenu = function () {
      _this.setState({
        show: !_this.state.show
      });
    };

    return _this;
  }

  _createClass(AppBar, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          color = _this$props.color,
          brand = _this$props.brand,
          children = _this$props.children,
          style = _this$props.style,
          fixed = _this$props.fixed,
          sticky = _this$props.sticky,
          backdrop = _this$props.backdrop,
          align = _this$props.align;
      var show = this.state.show;
      return React.createElement(NavBar, {
        color: color,
        fixed: fixed,
        sticky: sticky,
        backdrop: backdrop,
        role: "navigation",
        style: style
      }, brand, React.createElement(Burger, {
        className: show ? 'active' : '',
        onClick: this.toggleMenu
      }, React.createElement("span", null), React.createElement("span", null), React.createElement("span", null)), React.createElement(NavContent, {
        align: align
      }, children));
    }
  }]);

  return AppBar;
}(React.PureComponent);

exports.default = AppBar;
AppBar.defaultProps = {
  color: null,
  brand: null,
  fixed: false,
  sticky: false,
  fluid: false,
  backdrop: false,
  style: null
};
AppBar.Item = NavItem;