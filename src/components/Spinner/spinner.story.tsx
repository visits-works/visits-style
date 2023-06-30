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
  argTypes: {
    color: { defaultValue: 'primary' },
    size: { defaultValue: '5rem' },
  },
  parameters: {
    color: { values: colorList },
  },
} satisfies Meta<Props>;

export default meta;

type Story = StoryObj<typeof meta>;

export const base: Story = {};
