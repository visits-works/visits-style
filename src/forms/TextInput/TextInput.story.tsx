/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import TextInput, { Props } from '.';

const meta = {
  title: 'forms/TextInput',
  component: TextInput,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<Props>;

export default meta;

type Story = StoryObj<typeof meta>;

export const base: Story = {
  args: { name: 'test1', value: 'test value', placeholder: 'placeholder...', outline: false },
};
