import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';
import theme from '../../theme';

import Spinner from '.';

describe('Spinner', () => {
  it('rendered without error', () => {
    render(
      <ThemeProvider theme={theme}>
        <Spinner />
      </ThemeProvider>
    );
  });
});
