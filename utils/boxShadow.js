"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = boxShadow;

var _transparentize = _interopRequireDefault(require("polished/lib/color/transparentize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function boxShadow(size, color) {
  var amount = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.5;
  return "box-shadow: 0 0 0 ".concat(size, " ").concat((0, _transparentize.default)(amount, color), ";");
}