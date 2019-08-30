import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';
import theme from '../../theme';

import Tag from '.';

describe('Tag', () => {
  it('rendered without error', () => {
    render(
      <ThemeProvider theme={theme}>
        <Tag>Hello world</Tag>
      </ThemeProvider>
    );
  });
});
