/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Button, { Props } from './TextButton';
import Approved from '../Icons/Approved';
import ButtonGroup from './ButtonGroup';

const colorList = [
  '',
  'primary',
  'info',
  'link',
  'success',
  'warning',
  'danger',
  'dark',
];

const sizeList = [
  '',
  'small',
  'medium',
  'large',
];

const meta = {
  title: 'elements/TextButton',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    control: {
      color: colorList,
      size: sizeList,
    },
  },
} satisfies Meta<Props>;

export default meta;

type Story = StoryObj<typeof meta>;

export const base: Story = {
  args: {
    children: 'Hello wolrd',
  },
};

export const icon: Story = {
  render: (args) => <Button {...args}><Approved /></Button>
};

export const multiple: Story = {
  render: () => (
    <div>
      <Button>button 1</Button>
      <Button>ボタン 2</Button>
      <Button>BUTTON 3</Button>
    </div>
  ),
};

export const buttonGroup: Story = {
  render: () => (
    <ButtonGroup>
      <Button>button 1</Button>
      <Button>ボタン 2</Button>
      <Button>BUTTON 3</Button>
    </ButtonGroup>
  ),
};
