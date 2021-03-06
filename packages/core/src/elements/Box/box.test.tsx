import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';
import theme from '../../theme';

import Box from '.';

describe('Box', () => {
  it('rendered without error', () => {
    render(
      <ThemeProvider theme={theme}>
        <Box />
      </ThemeProvider>
    );
  });
});
