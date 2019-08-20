import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';
import theme from '../../theme';

import Divider from '.';

describe('Divider', () => {
  it('rendered without error', () => {
    render(
      <ThemeProvider theme={theme}>
        <div>
          content 1
          <Divider />
          content 2
        </div>
      </ThemeProvider>
    );
  });
});
