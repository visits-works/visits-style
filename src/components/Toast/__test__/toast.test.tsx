import React from 'react';
import { shallow, mount } from 'enzyme';
import Toast, { ToastItem } from '../index';

jest.useFakeTimers();

describe('Toast', () => {
  const onClear = jest.fn();

  beforeEach(() => {
    onClear.mockReset();
  });

  it('dom created when mount the container', () => {
    // @ts-ignore
    const Component = shallow<Toast>(<Toast toasts={[]} clear={onClear} />);
    expect(Component.instance().element).toBeTruthy();
  });

  it('render items properly', () => {
    const data = [
      { id: '1', message: 'test1' },
      { id: '2', message: 'test2' },
      { id: '3', message: 'test3' },
    ];
    // @ts-ignore
    const Component = shallow<Toast>(<Toast toasts={data} clear={onClear} />);
    expect(Component.find(ToastItem)).toHaveLength(3);
  });

  it('each items disappeared automatically', () => {
    const data = [
      { id: '1', message: 'test1' },
    ];
    // @ts-ignore
    const Component = mount<Toast>(<Toast toasts={data} clear={onClear} />);
    jest.advanceTimersByTime(5000);
    expect(onClear).toBeCalledWith('1');
  });
});
