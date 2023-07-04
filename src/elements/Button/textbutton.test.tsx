import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';
import theme from '../../theme';

import TextButton from './TextButton';

describe('TextButton', () => {
  it('rendered without error', () => {
    render(
      <ThemeProvider theme={theme}>
        <TextButton>Hello world</TextButton>
      </ThemeProvider>
    );
  });
});
