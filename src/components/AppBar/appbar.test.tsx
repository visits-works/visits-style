import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';
import theme from '../../theme';

import AppBar from '.';

describe('AppBar', () => {
  it('rendered without error', () => {
    render(
      <ThemeProvider theme={theme}>
        <AppBar>
          AppBar Content
        </AppBar>
      </ThemeProvider>
    );
  });
});
