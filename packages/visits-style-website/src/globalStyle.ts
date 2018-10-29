import { createGlobalStyle } from 'styled-components';
import normalize from '@styles/normalize';

export default createGlobalStyle`
  ${normalize}

  html, body {
    height: 100%;
  }

  #___gatsby {
    height: 100%;
    min-height: 100%;
    & > div {
      height: 100%;
      max-height: 100%;
      display: flex;
      flex-direction: column;
    }
  }

  pre {
    font-family: inherit;
  }
`;
