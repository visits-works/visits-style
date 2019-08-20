import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';
import theme from '../../theme';

import Progress from '.';

describe('Progress', () => {
  it('rendered without error', () => {
    render(
      <ThemeProvider theme={theme}>
        <Progress value={10} max={100} />
      </ThemeProvider>
    );
  });
});
