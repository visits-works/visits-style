"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = disabledColor;

var _styled = require("../styled");

var _transparentize = _interopRequireDefault(require("polished/lib/color/transparentize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function disabledColor(theme) {
  var textColor = (0, _transparentize.default)(0.15, theme.textDark);
  var backColor = (0, _transparentize.default)(0.55, theme.border);
  return (0, _styled.css)(["pointer-events:none;box-shadow:none;color:", ";background-color:", ";"], textColor, backColor);
}