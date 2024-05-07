/* eslint-disable import/no-extraneous-dependencies */
import React, { useRef, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { render, fireEvent, cleanup, screen } from '@testing-library/react';
import theme from '../../theme';
import Popover, { PopoverRef } from './index';

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
    const close = vi.fn();
    function Test() {
      const [disable, setDisable] = useState(false);
      return (
        <ThemeProvider theme={theme}>
          <Popover
            label={<button type="button">show</button>}
            disabled={disable}
            onClose={close}
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
    expect(close).not.toHaveBeenCalled();
  });

  it('onOpen/onClose callback works', () => {
    const open = vi.fn();
    const close = vi.fn();
    render(
      <ThemeProvider theme={theme}>
        <Popover
          label={<button type="button">show</button>}
          onOpen={open}
          onClose={close}
        >
          Popover Content
        </Popover>
      </ThemeProvider>,
    );
    expect(open).not.toHaveBeenCalled();

    fireEvent.click(screen.getByText('show'));
    expect(open).toHaveBeenCalled();
    expect(close).not.toHaveBeenCalled();

    fireEvent.click(screen.getByTestId('visits-style-shadow'));
    expect(close).toHaveBeenCalled();

    expect(open).toHaveBeenCalledTimes(1);
    expect(close).toHaveBeenCalledTimes(1);
  });

  it('onOpen/onClose callback works on manual close', () => {
    const open = vi.fn();
    const close = vi.fn();

    function Manual() {
      const ref = useRef<PopoverRef>(null);
      return (
        <ThemeProvider theme={theme}>
          <Popover
            ref={ref}
            label={<button type="button">show</button>}
            onOpen={open}
            onClose={close}
          >
            Popover Content
            <button onClick={() => ref.current?.close()}>close</button>
          </Popover>
          <button onClick={() => ref.current?.open()}>manual open</button>
        </ThemeProvider>
      );
    }
    render(<Manual />);
    expect(open).not.toHaveBeenCalled();

    fireEvent.click(screen.getByRole('button', { name: 'manual open' }));
    expect(open).toHaveBeenCalled();
    expect(close).not.toHaveBeenCalled();

    fireEvent.click(screen.getByRole('button', { name: 'close' }));
    expect(close).toHaveBeenCalled();

    expect(open).toHaveBeenCalledTimes(1);
    expect(close).toHaveBeenCalledTimes(1);
  });
});
