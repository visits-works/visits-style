// @ts-ignore
import 'react-app-polyfill/ie11';

import React, { StrictMode } from 'react';
import { configure, addDecorator } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';
// @ts-ignore
import { themes } from '@storybook/components';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import theme from '../src/theme/default';
import css from '../src/styles/normalize';

const GlobalStyle = createGlobalStyle`
  ${css}
`;
addDecorator(
  withOptions({
    name: 'visits-style',
    url: 'https://github.com/visits-works/visits-style',
    hierarchySeparator: /\/|\./,
    hierarchyRootSeparator: /\|/,
    // @ts-ignore
    theme: themes.dark,
  })
);

const containerStyle: any = {
  padding: '3rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}

addDecorator(story => (
  <StrictMode>
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle  />
        <div style={containerStyle}>
          {story()}
        </div>
      </>
    </ThemeProvider>
  </StrictMode>
));

function loadStories() {
  const req = require.context('../src/components', true, /\.story\.tsx$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
