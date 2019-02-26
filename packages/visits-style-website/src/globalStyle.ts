import { createGlobalStyle } from 'styled-components';
import normalize from '@styles/normalize';

export default createGlobalStyle`
  ${normalize}

  html {
    font-weight: 400;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
  }

  html, body {
    height: 100%;
  }

  body {
    overflow-y: auto;
    position: relative;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};

    #___gatsby {
      height: 100%;
      min-height: 100%;

      & > div {
        display: flex;
        flex-direction: column;
        min-height: 100%;
      }
    }
  }
`;
