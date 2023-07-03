/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Switch, { Props } from '.';

const meta = {
  title: 'forms/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<Props>;

export default meta;

type Story = StoryObj<typeof meta>;

export const base: Story = {
  args: { name: 'test1', value: '1', onLabel: 'ON', offLabel: 'OFF', checked: false, showLabel: false },
};

export const customColor: Story = {
  args: {
    name: 'test1', value: '1', onLabel: 'ON', offLabel: 'OFF', checked: false, showLabel: false,
    background: 'linear-gradient(19.76deg, #3DA3ED 18.61%, rgba(62, 69, 233, 0.8) 112.01%)',
    anchorColor: 'red',
  },
};
