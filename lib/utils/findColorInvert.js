"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = findColorInvert;

var _polished = require("polished");

var _colors = require("../styles/colors");

function findColorInvert(color) {
  if ((0, _polished.getLuminance)(color) > 0.55) {
    return _colors.black;
  } else {
    return _colors.white;
  }
}