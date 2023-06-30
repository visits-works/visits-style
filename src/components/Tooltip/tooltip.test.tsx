import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, fireEvent } from '@testing-library/react';
import theme from '../../theme';
import Tooltip from './index';

describe('Tooltip', () => {
  it('render', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Tooltip
          label="Tooltip Content"
        >
          show
        </Tooltip>
      </ThemeProvider>
    );
    fireEvent.mouseOver(getByText('show'));
    getByText('Tooltip Content');
  });
});
