import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Checkbox, { Props } from '.';
import FormField from '../Field/FormField';
import FormLabel from '../Field/FormLabel';

const noop = () => {};

const meta = {
  title: 'forms/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: { children: { control: false }, onChange: { control: false } },
} satisfies Meta<Props>;

export default meta;

type Story = StoryObj<typeof meta>;

export const base: Story = {
  render: (args) => {
    const [value, setValue] = useState(false);
    return (
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" checked={value} onChange={setValue} {...args} />
        <FormLabel htmlFor="terms" className="text-sm font-medium">
          Accept terms and conditions
        </FormLabel>
      </div>
    );
  },
  args: {
    name: 'test1', disabled: false,
  },
};

export const withMessage: Story = {
  render: (args) => (
    <FormField label="test-label" required>
      <Checkbox {...args} />
    </FormField>
  ),
  args: {
    name: 'test1', onChange: noop, checked: false, disabled: false,
  },
};
