"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Progress = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _utils = require("../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Progress = _styledComponents.default.progress.withConfig({
  displayName: "Progress"
})(["-moz-appearance:none;-webkit-appearance:none;border:none;border-radius:290486px;display:block;overflow:hidden;padding:0;width:100%;color:", ";", " &::-webkit-progress-bar{background-color:", ";}&::-webkit-progress-value{background-color:", ";transition:width 400ms linear;}&::-moz-progress-bar{background-color:", ";transition:width 400ms linear;}&::-ms-fill{border:0;background-color:", ";transition:width 400ms linear;}"], function (props) {
  return props.theme.grey;
}, (0, _utils.setSize)('height'), function (props) {
  return props.theme.grey;
}, function (props) {
  return props.theme.primary;
}, function (props) {
  return props.theme.primary;
}, function (props) {
  return props.theme.primary;
});

exports.Progress = Progress;
Progress.displayName = 'Progress';
var _default = Progress;
exports.default = _default;