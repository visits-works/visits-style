"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _findColorInvert = _interopRequireDefault(require("../../utils/findColorInvert"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Box = _styledComponents.default.div.withConfig({
  displayName: "Box"
})(["position:relative;display:flex;flex-direction:column;", " box-shadow:0 1px 2px 0 rgba(0,0,0,0.05);border-radius:3px;width:100%;min-width:0;word-wrap:break-word;", ""], function (_ref) {
  var borderless = _ref.borderless,
      theme = _ref.theme;
  return borderless ? "" : "border: 1px solid ".concat(theme.border, ";");
}, function (_ref2) {
  var color = _ref2.color,
      theme = _ref2.theme;
  if (!color) return '';
  var target = color === 'light' ? theme.color.greyLight : theme[color];
  var invertColor = (0, _findColorInvert.default)(target);
  return "background-color: ".concat(target, "; color: ").concat(invertColor, ";");
});

Box.displayName = 'Box';
var _default = Box;
exports.default = _default;