import * as st from 'styled-components';
// tslint:disable-next-line
import { ThemedStyledComponentsModule } from 'styled-components';

const {
  default: styled,
  css,
  keyframes,
  ThemeProvider,
} = st as ThemedStyledComponentsModule<ThemeType>;

export { css, keyframes, ThemeProvider };
export default styled;
