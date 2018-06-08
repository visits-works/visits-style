// @flow
import * as color from '../styles/colors';

const primary = color.turquoise;
const link = color.blue;
const info = color.cyan;
const success = color.green;
const warning = color.yellow;
const danger = color.red;
const dark = color.greyDarker;

const text = color.greyDark;
const textDark = color.greyDark;
const textLight = color.grey;
const textStrong = color.greyDarker;

const background = color.whiteTer;

const border = color.greyLight;
const borderHover = color.greyLighter;

export default {
  primary,
  link,
  info,
  success,
  warning,
  danger,
  dark,
  
  text,
  textDark,
  textLight,
  textStrong,

  background,

  border,
  borderHover,

  ...color,
}

