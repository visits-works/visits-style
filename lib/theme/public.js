"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var color = _interopRequireWildcard(require("../styles/colors"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var primary = color.turquoise;
var link = color.blue;
var info = color.cyan;
var success = color.green;
var warning = color.yellow;
var danger = color.red;
var dark = color.greyDarker;
var text = color.greyDark;
var textDark = color.greyDark;
var textLight = color.grey;
var textStrong = color.greyDarker;
var background = color.whiteTer;
var border = color.greyLighter;
var borderHover = color.greyLight;
var borderActive = color.greyDarker;
var _default = {
  primary: primary,
  link: link,
  info: info,
  success: success,
  warning: warning,
  danger: danger,
  dark: dark,
  black: color.black,
  white: color.white,
  text: text,
  textDark: textDark,
  textLight: textLight,
  textStrong: textStrong,
  background: background,
  border: border,
  borderHover: borderHover,
  borderActive: borderActive,
  color: color
};
exports.default = _default;