import { useRef, useState } from 'react';
import { render, fireEvent, cleanup, screen, waitFor } from '@testing-library/react';

import Popover, { type PopoverRef } from '.';

describe('Popover', () => {
  beforeEach(cleanup);

  it('render', () => {
    render(
      <Popover label={<button type="button">show</button>}>
        Popover Content
      </Popover>
    );
    fireEvent.click(screen.getByText('show'));
    screen.getByText('Popover Content');
  });

  it('close on click outer', async () => {
    render(
      <Popover label={<button type="button">show</button>}>
        Popover Content
      </Popover>
    );
    fireEvent.click(screen.getByText('show'));
    fireEvent.click(screen.getByTestId('vs-popover-shadow'));
    await waitFor(() => expect(screen.queryByRole('tooltip')).toBeNull());
  });

  it('close on disabled', () => {
    const close = vi.fn();
    function Test() {
      const [disable, setDisable] = useState(false);
      return (
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
      <Popover
        label={<button type="button">show</button>}
        onOpen={open}
        onClose={close}
      >
        Popover Content
      </Popover>
    );
    expect(open).not.toHaveBeenCalled();

    fireEvent.click(screen.getByText('show'));
    expect(open).toHaveBeenCalled();
    expect(close).not.toHaveBeenCalled();

    fireEvent.click(screen.getByTestId('vs-popover-shadow'));
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
        <>
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
        </>
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
