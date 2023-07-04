import React from 'react';
import type { Preview } from '@storybook/react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import theme from '../src/theme';
import css from '../src/styles/normalize';

const GlobalStyle = createGlobalStyle`
  ${css}
`;

export default {
  parameters: {
    name: 'visits-style',
    url: 'https://github.com/visits-works/visits-style',
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [(Story) => (
    <ThemeProvider theme={theme}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', minHeight: '65vh' }}>
        <GlobalStyle />
        <Story />
      </div>
    </ThemeProvider>
  )],
} as Preview;
