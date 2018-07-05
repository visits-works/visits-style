import * as SC from 'styled-components';
import { ThemeType } from './types';

const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider,
} = SC as SC.ThemedStyledComponentsModule<ThemeType>;

export { css, injectGlobal, keyframes, ThemeProvider };
export default styled;
