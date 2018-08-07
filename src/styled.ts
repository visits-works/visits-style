import React from 'react';
import * as st from 'styled-components';
// tslint:disable-next-line
import { ThemedStyledComponentsModule, StyledComponentClass } from 'styled-components';

export type ColorType = 'light' | 'primary' | 'info' | 'link' | 'success' |
  'warning' | 'danger' | 'dark' | 'text';

export type SizeType = 'small' | 'medium' | 'large';

export type ColSizeType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type AlignType = 'left' | 'right' | 'center';

export interface InputProps {
  name: string;
  value?: string | number;
  onChange: (e?: React.ChangeEvent<any>) => void;
  onBlur?: (e?: React.ChangeEvent<any>) => void;
}

export interface ThemeType {
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

  [key: string]: string | any;
}

const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider,
} = st as ThemedStyledComponentsModule<ThemeType>;

export { StyledComponentClass };
export { css, injectGlobal, keyframes, ThemeProvider };
export default styled;
