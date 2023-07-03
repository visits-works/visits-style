import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, fireEvent, screen } from '@testing-library/react';

import theme from '../../theme';
import Tooltip from './index';

describe('Tooltip', () => {
  it('render', () => {
    render(
      <ThemeProvider theme={theme}>
        <Tooltip label="Tooltip Content">
          <span>show</span>
        </Tooltip>
      </ThemeProvider>
    );

    expect(screen.queryByText('Tooltip Content')).toBeNull();

    fireEvent.mouseEnter(screen.getByText('show'));
    screen.getByText('Tooltip Content');
  });

  it('tooltip does not show on disabled', () => {
    render(
      <ThemeProvider theme={theme}>
        <Tooltip label="Tooltip Content" disabled>
          <span>show</span>
        </Tooltip>
      </ThemeProvider>
    );
    expect(screen.queryByText('Tooltip Content')).toBeNull();

    fireEvent.mouseEnter(screen.getByText('show'));
    expect(screen.queryByText('Tooltip Content')).toBeNull();
  });
});
