import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';
import theme from '../../theme';

import Textarea from '.';

describe('Textarea', () => {
  it('rendered without error', () => {
    const onChange = jest.fn();
    render(
      <ThemeProvider theme={theme}>
        <Textarea name="test" onChange={onChange} value="test" placeholder="placeholder" />
      </ThemeProvider>
    );
  });
});
