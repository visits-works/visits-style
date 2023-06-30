/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Spinner from '.';

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
  title: 'components/Spinner',
  // @ts-ignore
  component: Spinner,
  tags: ['autodocs'],
  argTypes: {
    color: { defaultValue: 'primary' },
  },
} satisfies Meta<typeof Spinner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const tooltip: Story = {
  args: {
    color: 'primary',
    size: '5rem',
  },
  parameters: {
    color: { values: colorList },
  },
};
