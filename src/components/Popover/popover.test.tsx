/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { render, fireEvent, cleanup, screen } from '@testing-library/react';
import theme from '../../theme';
import Popover from './index';

describe('Popover', () => {
  beforeEach(cleanup);

  it('render', () => {
    render(
      <ThemeProvider theme={theme}>
        <Popover
          label={<button type="button">show</button>}
        >
          Popover Content
        </Popover>
      </ThemeProvider>,
    );
    fireEvent.click(screen.getByText('show'));
    screen.getByText('Popover Content');
  });

  it('close on click outer', () => {
    render(
      <ThemeProvider theme={theme}>
        <Popover
          label={<button type="button">show</button>}
        >
          Popover Content
        </Popover>
      </ThemeProvider>,
    );
    fireEvent.click(screen.getByText('show'));
    fireEvent.click(screen.getByTestId('visits-style-shadow'));
    expect(screen.queryByText('Popover Content')).toBeNull();
  });

  it('close on disabled', () => {
    function Test() {
      const [disable, setDisable] = useState(false);
      return (
        <ThemeProvider theme={theme}>
          <Popover
            label={<button type="button">show</button>}
            disabled={disable}
          >
            Popover Content
            <button
              type="button"
              data-testid="disable"
              onClick={() => setDisable(true)}
            >
              disable
            </button>
          </Popover>
        </ThemeProvider>
      );
    }
    render(<Test />);
    fireEvent.click(screen.getByText('show'));
    fireEvent.click(screen.getByTestId('disable'));
    expect(screen.queryByTestId('disable')).toBeNull();
  });
});
