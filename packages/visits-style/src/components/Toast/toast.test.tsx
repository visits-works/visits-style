import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';
import theme from '../../theme';
import Toast from './index';

jest.useFakeTimers();

describe('Toast', () => {
  const onClear = jest.fn();

  beforeEach(() => {
    onClear.mockReset();
  });

  it('rendered', () => {
    render(
      <ThemeProvider theme={theme}>
        <Toast toasts={[]} clear={onClear} />
      </ThemeProvider>
    );
  });

  it('render items properly', () => {
    const data = [
      { id: '1', message: 'test1' },
      { id: '2', message: 'test2' },
      { id: '3', message: 'test3' },
    ];
    const { getAllByTestId } = render(
      <ThemeProvider theme={theme}>
        <Toast toasts={data} clear={onClear} />
      </ThemeProvider>
    );
    expect(getAllByTestId('toast-item')).toHaveLength(3);
  });

  it('onClear called automatically after duration time', () => {
    const data = [
      { id: '1', message: 'test1' },
    ];
    render(
      <ThemeProvider theme={theme}>
        <Toast toasts={data} clear={onClear} />
      </ThemeProvider>
    );
    jest.advanceTimersByTime(5000);
    expect(onClear).toBeCalledWith('1');
  });
});
