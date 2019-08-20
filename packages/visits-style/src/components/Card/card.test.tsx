import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';
import theme from '../../theme';

import Card from '.';

describe('Card', () => {
  it('rendered without error', () => {
    render(
      <ThemeProvider theme={theme}>
        <Card>
          Card Content
        </Card>
      </ThemeProvider>
    );
  });
});
