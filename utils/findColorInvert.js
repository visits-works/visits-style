"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = findColorInvert;

var _getLuminance = _interopRequireDefault(require("polished/lib/color/getLuminance"));

var _colors = require("../styles/colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function findColorInvert(color) {
  if ((0, _getLuminance.default)(color) > 0.55) {
    return _colors.black;
  } else {
    return _colors.white;
  }
}