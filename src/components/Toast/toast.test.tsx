import { render, screen, waitFor, act } from '@testing-library/react';

import Toast from '.';
import observer from './observer';

vi.useFakeTimers({ shouldAdvanceTime: true, shouldClearNativeTimers: true });

describe('Toast', () => {
  beforeEach(() => {
    observer.clear();
  });

  it('render items properly', async () => {
    render(<Toast />);

    observer.add('test1');
    observer.add('test2');
    observer.add('test3');

    const toasts = await screen.findAllByRole('log');
    expect(toasts).toHaveLength(3);

    expect(toasts[0]).toHaveTextContent('test1');
    expect(toasts[1]).toHaveTextContent('test2');
    expect(toasts[2]).toHaveTextContent('test3');
  });

  it('onClear called automatically after duration time', async () => {
    render(<Toast />);

    observer.add('test1');
    await screen.findByRole('log');

    await act(() => vi.advanceTimersByTime(5000));
    await act(() => vi.advanceTimersByTime(500));

    await waitFor(() => expect(screen.queryByRole('log')).toBeNull());
  });
});
