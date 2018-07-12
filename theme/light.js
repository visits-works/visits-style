"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var color = _interopRequireWildcard(require("../styles/colors"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var _default = {
  primary: color.turquoise,
  link: color.blue,
  info: color.cyan,
  success: color.green,
  warning: color.yellow,
  danger: color.red,
  dark: color.greyDarker,
  black: color.black,
  white: color.white,
  text: color.greyDark,
  textDark: color.greyDark,
  textLight: color.grey,
  textStrong: color.greyDark,
  background: color.whiteTer,
  border: color.greyLighter,
  borderHover: color.greyLight,
  borderActive: color.greyDarker,
  color: color
};
exports.default = _default;