/* eslint-disable import/no-extraneous-dependencies */
import React, { useCallback, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Toast from '.';
import type { ToastType } from './types';

import Button from '../../elements/Button';
import Field from '../../forms/Field';
import Checkbox from '../../forms/Checkbox';
import TextInput from '../../forms/TextInput';

const positionList = ['top', 'top-left', 'top-right', 'bottom', 'bottom-left', 'bottom-right'];
const colorList = ['warning', 'danger', 'info', 'primary', 'success'];

function ToastDemo({ fixed, position }: any) {
  const [list, setList] = useState<ToastType[]>([]);
  const [duration, setDuration] = useState<number | null>(2000);
  const [showButton, setShowbutton] = useState(false);

  const addToast = useCallback(() => {
    const newList = list.slice();
    // const color = colorList[Math.floor(Math.random() * Math.floor(colorList.length))] as ColorType;
    const id = `_${Math.random().toString(36).substring(2, 9)}`;
    newList.push({
      id, message: `ID: ${id}`,
      duration, clearOnClick: showButton,
    });
    setList(newList);
  }, [duration, showButton, list]);

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

  const clickButton = useCallback(() => setShowbutton((b) => !b), []);

  return (
    <div>
      <Checkbox checked={showButton} onChange={clickButton}>ボタン表示</Checkbox>
      <br />
      <Field label="タイムアウト(空欄はタイムアウトなし)">
        <TextInput value={duration || ''} onChange={onDurationChange} outline />
      </Field>
      <br />
      <Button color="primary" onClick={addToast}>Toast!</Button>
      <Button color="danger" onClick={clearAll}>Clear All</Button>
      <Toast
        toasts={list}
        clear={clearToast}
        position={position}
        fixed={fixed}
      />
    </div>
  );
}

const meta = {
  title: 'components/Toast',
  component: Toast,
  tags: ['autodocs'],
  argTypes: {
    
  },
  parameters: {
    control: {
      position: positionList,
    },
  },
} satisfies Meta<typeof Toast>;

export default meta;

type Story = StoryObj<typeof meta>;

export const base: Story = {
  render: (args) => <ToastDemo {...args} />,
  argTypes: {
    fixed: { defaultValue: true, type: 'boolean' },
    position: { defaultValue: 'top-left', type: 'string' },
  },
  // @ts-ignore
  args: {},
};
