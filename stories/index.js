/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import theme from '../../src/theme/public';

import '../../src/styles/global';

addDecorator(story => (
  <ThemeProvider theme={theme}>
    { story() }
  </ThemeProvider>
));

const req = require.context('.', true, /\.stories\.js$/);

export default req.keys().forEach(filename => req(filename));
