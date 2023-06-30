/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { render, fireEvent, cleanup } from '@testing-library/react';
import theme from '../../theme';
import Popover from './index';

describe('Popover', () => {
  beforeEach(cleanup);

  it('render', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Popover
          label={<button type="button">show</button>}
        >
          Popover Content
        </Popover>
      </ThemeProvider>,
    );
    fireEvent.click(getByText('show'));
    getByText('Popover Content');
  });

  it('close on click outer', () => {
    const { getByText, queryByText, getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Popover
          label={<button type="button">show</button>}
        >
          Popover Content
        </Popover>
      </ThemeProvider>,
    );
    fireEvent.click(getByText('show'));
    fireEvent.click(getByTestId('visits-style-shadow'));
    expect(queryByText('Popover Content')).toBeNull();
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
    const { getByText, getByTestId, queryByTestId } = render(<Test />);
    fireEvent.click(getByText('show'));
    fireEvent.click(getByTestId('disable'));
    expect(queryByTestId('disable')).toBeNull();
  });
});
