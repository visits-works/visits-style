/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Textarea, { Props } from '.';

const meta = {
  title: 'forms/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<Props>;

export default meta;

type Story = StoryObj<typeof meta>;

export const base: Story = {
  args: { name: 'test1', value: 'hello world' },
};
