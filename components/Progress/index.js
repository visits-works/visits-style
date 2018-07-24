"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Progress = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _setSize = _interopRequireDefault(require("../../utils/setSize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Progress = _styledComponents.default.progress.withConfig({
  displayName: "Progress"
})(["-moz-appearance:none;-webkit-appearance:none;border:none;border-radius:290486px;display:block;overflow:hidden;padding:0;width:100%;color:", ";", " will-change:width;transition-property:width;transition-duration:350ms;transition-timing-function:cubic-bezier(0.645,0.045,0.355,1);&::-webkit-progress-bar{background-color:", ";}&::-webkit-progress-value{background-color:", ";}&::-moz-progress-bar{background-color:", ";}&::-ms-fill{border:0;background-color:", ";}"], function (_ref) {
  var theme = _ref.theme;
  return theme.background;
}, function (_ref2) {
  var size = _ref2.size;
  return (0, _setSize.default)('height', size);
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.background;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.primary;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.primary;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.primary;
});

exports.Progress = Progress;
Progress.displayName = 'Progress';
var _default = Progress;
exports.default = _default;