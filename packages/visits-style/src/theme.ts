import { ThemeType } from './types';

const theme: ThemeType = {
  fontFamily: 'ヒラギノ角ゴシック,"ヒラギノ角ゴ ProN W3",メイリオ,Meiryo,"ＭＳ Ｐゴシック","MS PGothic",sans-serif',
  fontSize: '16px',
  gutter: 24,
  smallGutter: 16,
  media: {
    mobile: '576px',
    tablet: '769px',
    desktop: '960px',
    fullhd: '1344px',
  },
  radius: '4px',
  timeout: 250,
  formPadding: '0.75rem 0.625rem',

  primary: '#37B151',
  link: '#578ba9',
  info: '#209cee',
  success: '#0fa886',
  warning: '#f2b541',
  danger: '#f3575a',
  dark: '#363636',
  light: '#9b9b9b',

  black: '#0a0a0a',
  blackBis: '#121212',
  blackTer: '#242424',

  white: '#ffffff',
  whiteBis: '#fafafa',
  whiteTer: '#f5f5f5',

  grey: '#7a7a7a',
  greyLight: '#9b9b9b',
  greyLighter: '#dbdbdb',

  text: '#4a4a4a',
  textDark: '#4a4a4a',
  textLight: '#7a7a7a',
  textStrong: '#4a4a4a',

  background: '#f5f5f5',

  border: '#dbdbdb',
  borderHover: '#9b9b9b',
  borderActive: '#4a4a4a',

  placeholder: '#7a7a7a',
  backdrop: 'rgba(10,10,10,0.25)',
  responsive: true,
};

export default theme;
