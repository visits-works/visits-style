// @flow

export type SizeType = 'small' | 'medium' | 'large';

export type ColorType = 'white' | 'light' | 'dark' | 'black' | 'text' | 'primary' | 'link' | 'info' | 'success' | 'warning' | 'danger';

export type ThemeColors = {
  black: string,
  blackBis: string,
  blackTer: string,

  greyDarker: string,
  greyDark: string,
  grey: string,
  greyLight: string,
  greyLighter: string,

  whiteTer: string,
  whiteBis: string,
  white: string,

  orange: string,
  yellow: string,
  green: string,
  turquoise: string,
  cyan: string,
  blue: string,
  purple: string,
  red: string,
};

export type ThemeType = {
  primary: string,
  link: string,
  info: string,
  success: string,
  warning: string,
  danger: string,
  dark: string,

  black: string,
  white: string,

  text: string,
  textDark: string,
  textLight: string,
  textStrong: string,

  background: string,

  border: string,
  borderHover: string,
  borderActive: string,

  color: ThemeColors,
};

export type CommonInputType = {
  name: string,
  onChange?: () => {},
};
