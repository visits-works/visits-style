import { BaseThemedCssFunction } from 'styled-components';

export type ColorType = 'light' | 'primary' | 'info' | 'link' | 'success' |
'warning' | 'danger' | 'dark' | 'text' | string;

export type SizeType = 'small' | 'medium' | 'large';

export type ColSizeType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type AlignType = 'left' | 'right' | 'center';

export type CSSType = ReturnType<BaseThemedCssFunction<ThemeType | any>> | string;

export interface ThemeType {
  fontSize: string;
  fontFamily: string;

  gutter: number;
  smallGutter: number;

  media: {
    mobile: string;
    tablet: string;
    desktop: string;
    fullhd: string;
  };
  radius: string;

  primary: string;
  link: string;
  info: string;
  success: string;
  warning: string;
  danger: string;
  dark: string;

  black: string;
  white: string;

  text: string;
  textDark: string;
  textLight: string;
  textStrong: string;

  background: string;

  border: string;
  borderHover: string;
  borderActive: string;
  responsive: boolean;
  [key: string]: string | number | boolean | any;
}
