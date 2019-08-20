import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';
import theme from '../../theme';

import TextInput from '.';

describe('TextInput', () => {
  it('rendered without error', () => {
    const onChange = jest.fn();
    render(
      <ThemeProvider theme={theme}>
        <TextInput name="test" onChange={onChange} value="test" placeholder="placeholder" />
      </ThemeProvider>
    );
  });
});
