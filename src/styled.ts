import * as SC from 'styled-components';
import { ThemedStyledComponentsModule } from 'styled-components';
import { ThemeType } from './types';

const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider,
} = SC as ThemedStyledComponentsModule<ThemeType>;

export { css, injectGlobal, keyframes, ThemeProvider };
export default styled;
