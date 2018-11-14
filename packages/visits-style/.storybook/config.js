// @ts-ignore
import 'react-app-polyfill/ie11';

import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
// @ts-ignore
import { themes } from '@storybook/components';
import { ThemeProvider, injectGlobal } from 'styled-components';

import theme from '../src/theme/default';
import css from '../src/styles/normalize';

injectGlobal`
  ${css}
`;

setOptions({
  name: 'visits-style',
  url: 'https://github.com/visits-works/visits-style',
  hierarchySeparator: /\/|\./,
  hierarchyRootSeparator: /\|/,
  // @ts-ignore
  theme: themes.dark,
});

const containerStyle: any = {
  padding: '3rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}

addDecorator(story => (
  <ThemeProvider theme={theme}>
    <div style={containerStyle}>
      {story()}
    </div>
  </ThemeProvider>
));

function loadStories() {
  const req = require.context('../src/components', true, /\.story\.tsx$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
