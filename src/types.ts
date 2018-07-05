
export declare type ColorType = 'light' | 'primary' | 'link' | 'success' | 'warning' | 'danger' | 'dark' | 'text';

export declare type SizeType = 'small' | 'medium' | 'large';

export declare type ColSizeType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export declare interface InputProps {
  name: string;
}

export declare interface ThemeType {
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

  color: any;
}
