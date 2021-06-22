import { addDecorator } from "@storybook/react";
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import theme from '../packages/core/src/theme';
import css from '../packages/core/src/styles/normalize';

export const parameters = {
  name: 'visits-style',
  url: 'https://github.com/visits-works/visits-style',
};

const GlobalStyle = createGlobalStyle`
  ${css}
`;

const containerStyle = {
  padding: '3rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}

addDecorator(story => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle  />
      <div style={containerStyle}>
        {story()}
      </div>
    </>
  </ThemeProvider>
));
