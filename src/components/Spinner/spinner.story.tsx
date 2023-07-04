/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Spinner, { Props } from '.';

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
  component: Spinner,
  tags: ['autodocs'],
} satisfies Meta<Props>;

export default meta;

type Story = StoryObj<typeof meta>;

export const base: Story = {
  args: { color: 'primary', size: '5rem' },
  parameters: {
    color: { values: colorList },
  },
};
