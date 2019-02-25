import { createGlobalStyle } from 'styled-components';
import normalize from '@styles/normalize';

export default createGlobalStyle`
  ${normalize}

  html, body {
    height: 100%;
  }

  body {
    overflow-y: auto;
    position: relative;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};

    #___gatsby {
      display: flex;
      flex-direction: column;
      min-height: 100%;

      & > div {
        height: 100%;
        max-height: 100%;
        display: flex;
        flex-direction: column;
      }
    }
  }
`;
