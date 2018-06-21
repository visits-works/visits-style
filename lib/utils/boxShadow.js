"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = boxShadow;

var _polished = require("polished");

function boxShadow(size, color) {
  var amount = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.5;
  return "box-shadow: 0 0 0 ".concat(size, " ").concat((0, _polished.transparentize)(amount, color), ";");
}