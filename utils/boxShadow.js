"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = boxShadow;

var _transparentize = _interopRequireDefault(require("polished/lib/color/transparentize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function boxShadow(size, color, amount) {
  var shadowColor = amount ? (0, _transparentize.default)(amount, color) : color;
  return "box-shadow: 0 0 0 ".concat(size, " ").concat(shadowColor, ";");
}