// @ts-ignore
// import 'react-app-polyfill/ie9';

import React, { StrictMode } from 'react';
import { configure, addDecorator } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';
import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import theme from '../src/theme';
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
    theme: {
      mainTextFace: theme.fontFamily,
      // monoTextFace: theme.fontFamily,
      mainBackground: theme.background,
      mainBorder: `1px solid ${theme.border}`,
      mainBorderColor: theme.borderHover,
      mainBorderRadius: 4,
      // mainFill: 'rgba(255,255,255,0.1)',
      barFill: theme.greyLighter,
      barSelectedColor: theme.greyLight,
      inputFill: 'rgba(255,255,255,1)',
      mainTextColor: theme.text,
      dimmedTextColor: theme.textLight,
      highlightColor: '#9fdaff',
      successColor: theme.success,
      failColor: theme.danger,
      warnColor: theme.warning,
      mainTextSize: 13,
      layoutMargin: 10,
      brand: {
        background: '',
      },
    },
  })
);
addDecorator(withA11y);

const containerStyle = {
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

addDecorator(withKnobs);

function loadStories() {
  const req = require.context('../src', true, /\.story\.tsx$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
