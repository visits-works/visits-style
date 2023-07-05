import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';
import theme from '../../theme';

import Textarea, { Props } from '.';

describe('Textarea', () => {
  it('rendered without error', () => {
    renderInput({});
  });
});

function renderInput(props: Props) {
  render(
    <ThemeProvider theme={theme}>
      <Textarea {...props} />
    </ThemeProvider>
  );
}

