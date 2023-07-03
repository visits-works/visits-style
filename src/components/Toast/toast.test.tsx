/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, screen, waitFor, act } from '@testing-library/react';
import theme from '../../theme';
import Toast from './index';

vi.useFakeTimers({ shouldAdvanceTime: true, shouldClearNativeTimers: true });

describe('Toast', () => {
  const onClear = vi.fn();

  beforeEach(() => {
    onClear.mockReset();
  });

  it('rendered', () => {
    render(
      <ThemeProvider theme={theme}>
        <Toast toasts={[]} clear={onClear} />
      </ThemeProvider>,
    );
  });

  it('render items properly', () => {
    const data = [
      { id: '1', message: 'test1' },
      { id: '2', message: 'test2' },
      { id: '3', message: 'test3' },
    ];
    render(
      <ThemeProvider theme={theme}>
        <Toast toasts={data} clear={onClear} />
      </ThemeProvider>
    );
    expect(screen.getAllByTestId('vs-toast-item')).toHaveLength(3);
  });

  it('onClear called automatically after duration time', async () => {
    const data = [
      { id: '1', message: 'test1' },
    ];
    render(
      <ThemeProvider theme={theme}>
        <Toast toasts={data} clear={onClear} />
      </ThemeProvider>
    );
    act(() => vi.advanceTimersByTime(5000));
    await waitFor(() => expect(onClear).toBeCalledWith('1'));
  });
});
