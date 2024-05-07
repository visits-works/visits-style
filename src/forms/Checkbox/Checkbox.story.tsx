/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Field from '../Field';
import Checkbox, { Props } from '.';

const noop = () => {};

const meta = {
  title: 'forms/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
} satisfies Meta<Props>;

export default meta;

type Story = StoryObj<typeof meta>;

export const base: Story = {
  args: {
    name: 'test1', value: 1, onChange: noop, checked: false, disabled: false,
  },
};

export const withField: Story = {
  render: (args) => (
    <Field label="test-label" required>
      <Checkbox {...args} />
    </Field>
  ),
  args: {
    name: 'test1', value: 1, onChange: noop, checked: false, disabled: false,
  },
};
