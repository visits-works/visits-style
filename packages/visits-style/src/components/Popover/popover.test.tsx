import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, fireEvent } from '@testing-library/react';
import theme from '../../theme';
import Popover from './index';

describe('Popover', () => {
  it('render', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Popover
          label={<button>show</button>}
        >
          Popover Content
        </Popover>
      </ThemeProvider>
    );
    fireEvent.click(getByText('show'));
    getByText('Popover Content');
  });
});
