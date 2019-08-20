import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';
import theme from '../../theme';

import Button from '.';

describe('Button', () => {
  it('rendered without error', () => {
    render(
      <ThemeProvider theme={theme}>
        <Button>Hello world</Button>
      </ThemeProvider>
    );
  });
});
