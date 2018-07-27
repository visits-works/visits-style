"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Hero;

var _react = _interopRequireDefault(require("react"));

var _styled = _interopRequireWildcard(require("../../styled"));

var _Container = _interopRequireDefault(require("../Grid/Container"));

var _findColorInvert = _interopRequireDefault(require("../../utils/findColorInvert"));

var _media = require("../../utils/media");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["padding-bottom: 18rem; padding-top: 18rem;"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["padding-bottom: 9rem; padding-top: 9rem;"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function setColor(_ref) {
  var color = _ref.color,
      theme = _ref.theme;
  if (!color) return '';
  var target = color === 'light' ? theme.color.greyLight : theme[color];
  var invertColor = (0, _findColorInvert.default)(target);
  return "background-color: ".concat(target, "; color: ").concat(invertColor, ";");
}

function setSize(_ref2) {
  var size = _ref2.size;
  if (!size || size === 'small') return '';

  switch (size) {
    case 'medium':
      return (0, _media.mediaDesktop)(_templateObject());

    case 'large':
      return (0, _media.mediaDesktop)(_templateObject2());

    case 'full':
      return (0, _styled.css)(["min-height:100vh;", "{align-items:center;display:flex;}"], Body);

    default:
      return '';
  }
}

var Body = _styled.default.div.withConfig({
  displayName: "Hero__Body"
})(["flex-grow:1;flex-shrink:0;padding:3rem 1.5rem;", " h1{font-size:2rem;font-weight:600;line-height:1.125;&:not(:last-child){margin-bottom:1.5rem;}}h2{font-size:1.25rem;font-weight:400;line-height:1.25;}h1+h2{margin-top:-1.25rem;}"], function (_ref3) {
  var center = _ref3.center;
  return center ? 'text-align: center;' : '';
});

var Wrapper = _styled.default.div.withConfig({
  displayName: "Hero__Wrapper"
})(["align-items:stretch;display:flex;flex-direction:column;justify-content:space-between;", " ", " header{background-color:inherit;color:inherit;}header+", "{margin-top:3.25rem;margin-bottom:3.25rem;}"], setColor, setSize, Body);

function Hero(_ref4) {
  var children = _ref4.children,
      color = _ref4.color,
      size = _ref4.size,
      center = _ref4.center,
      header = _ref4.header;
  return _react.default.createElement(Wrapper, {
    color: color,
    size: size
  }, header, _react.default.createElement(Body, {
    center: center
  }, _react.default.createElement(_Container.default, null, children)));
}