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

  it('progressBar should have 0 length when max/value both zero', () => {
    const { getByLabelText } = render(
      <ThemeProvider theme={theme}>
        <Progress value={0} max={0} />
      </ThemeProvider>
    );
    expect(getByLabelText('progress')).toHaveStyle({ width: '0%' });
  });
});
