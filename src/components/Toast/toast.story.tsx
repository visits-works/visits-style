/* eslint-disable import/no-extraneous-dependencies */
import React, { useCallback, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Toast from '.';
import type { ToastType } from './types';

import Button from '../../elements/Button';
import Box from '../../elements/Box';
import Field from '../../forms/Field';
import TextInput from '../../forms/TextInput';

const positionList = ['top', 'top-left', 'top-right', 'bottom', 'bottom-left', 'bottom-right'];
const colorList = ['warning', 'danger', 'info', 'primary', 'success'];

const meta = {
  title: 'components/Toast',
  component: Toast,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Toast>;

export default meta;

type Story = StoryObj<typeof meta>;

export const base: Story = {
  render: (args) => {
    const [list, setList] = useState<ToastType[]>([]);
    const [duration, setDuration] = useState<number | null>(2000);
  
    const addToast = useCallback(() => {
      const newList = list.slice();
      const color = colorList[Math.floor(Math.random() * Math.floor(colorList.length))];
      const id = `_${Math.random().toString(36).substring(2, 9)}`;
      newList.push({
        id,
        message: (
          <Box color={color} borderless style={{ padding: '0.5rem 0.85rem' }}>
            {`ID: ${id}`}
          </Box>
        ),
        duration,
      });
      setList(newList);
    }, [duration, list]);
  
    const clearToast = useCallback((id: string) => {
      setList((l) => l.filter((item) => item.id !== id));
    }, []);
  
    const clearAll = useCallback(() => setList([]), []);
  
    const onDurationChange = useCallback(({ target }: any) => {
      if (!target.value) {
        setDuration(null);
      } else {
        setDuration(parseInt(target.value, 10));
      }
    }, []);

    return (
      <div>
        <Field label="タイムアウト(空欄はタイムアウトなし)">
          <TextInput value={duration || ''} onChange={onDurationChange} outline />
        </Field>
        <br />
        <footer>
          <Button color="primary" onClick={addToast}>Toast!</Button>
          <Button color="danger" onClick={clearAll} style={{ marginLeft: '0.5rem' }}>Clear All</Button>
        </footer>
        <Toast {...args} toasts={list} clear={clearToast} />
      </div>
    );
  },
  // @ts-ignore
  args: { fixed: true, position: 'top-left' },
  parameters: {
    controls: {
      position: positionList,
    },
  },
};
