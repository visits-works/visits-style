/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Tag, { Props } from '.';

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

const meta = {
  title: 'elements/Tag',
  component: Tag,
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    control: {
      color: colorList,
    },
  },
} satisfies Meta<Props>;

export default meta;

type Story = StoryObj<typeof meta>;

export const base: Story = {
  args: { children: 'Hello world!', round: false, onClose: undefined },
};

export const close: Story = {
  name: 'with close button',
  args: { children: 'Hello world!', round: false, onClose: () => alert('close!') },
};
