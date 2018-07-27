"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styled = _interopRequireWildcard(require("../../styled"));

var _darken = _interopRequireDefault(require("polished/lib/color/darken"));

var _findColorInvert = _interopRequireDefault(require("../../utils/findColorInvert"));

var _boxShadow = _interopRequireDefault(require("../../utils/boxShadow"));

var _setSize = _interopRequireDefault(require("../../utils/setSize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function setColor(_ref) {
  var theme = _ref.theme,
      color = _ref.color,
      outline = _ref.outline;

  if (!color) {
    return (0, _styled.css)(["background-color:", ";border-color:", ";color:", ";&:hover{border-color:", ";}&:active{border-color:", ";}"], theme.white, theme.border, theme.text, theme.borderHover, theme.borderActive);
  } else if (color === 'text') {
    return (0, _styled.css)(["background-color:transparent;border-color:transparent;color:", ";&:hover{text-decoration:underline;}"], theme.text);
  }

  var target = color === 'light' ? theme.color.greyLight : theme[color];
  var invertColor = (0, _findColorInvert.default)(target);

  if (outline) {
    return (0, _styled.css)(["background-color:transparent;border-color:", ";color:", ";&:hover{background-color:", ";color:", ";}&:focus{", "}"], target, target, target, invertColor, (0, _boxShadow.default)('0.2rem', target));
  }

  return (0, _styled.css)(["background-color:", ";border-color:", ";border-color:transparent;color:", ";box-shadow:none;&:hover{background-color:", ";}&:active{background-color:", ";}&:focus{", "}"], target, target, invertColor, (0, _darken.default)(0.025, target), (0, _darken.default)(0.05, target), (0, _boxShadow.default)('0.2rem', target));
}

var Button = _styled.default.button.withConfig({
  displayName: "Button"
})(["position:relative;outline:none;appearance:none;box-sizing:border-box;display:inline-flex;text-align:center;white-space:nowrap;cursor:pointer;justify-content:center;border:1px solid transparent;border-radius:4px;height:2.25em;padding:0.375em 0.75em;transition-property:background-color,color,box-shadow;transition-duration:0.15s;transition-timing-function:ease-in-out;", " ", " &:disabled{pointer-events:none;box-shadow:none;opacity:0.5;}&:not(:last-child){margin-right:0.5rem;margin-bottom:0.5rem;}"], setColor, function (_ref2) {
  var size = _ref2.size;
  return (0, _setSize.default)('font-size', size);
});

Button.displayName = 'Button';
var _default = Button;
exports.default = _default;