import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';
import theme from '../../theme';

import Placeholder from '.';

describe('Placeholder', () => {
  it('rendered without error', () => {
    render(
      <ThemeProvider theme={theme}>
        <Placeholder />
      </ThemeProvider>
    );
  });
});
