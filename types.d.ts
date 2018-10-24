
declare type ColorType = 'light' | 'primary' | 'info' | 'link' | 'success' |
'warning' | 'danger' | 'dark' | 'text';

declare type SizeType = 'small' | 'medium' | 'large';

declare type ColSizeType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

declare type AlignType = 'left' | 'right' | 'center';

declare interface InputProps {
  name: string;
  value?: string | number;
  onChange: (e?: any) => void;
  onBlur?: (e?: any) => void;
}

declare interface ThemeType {
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
