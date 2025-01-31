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
  render: (args) => {
    const [value, setValue] = useState(false);
    return (
      <div className="flex items-top space-x-2">
        <Checkbox id="terms" checked={value} onChange={setValue} {...args} />
        <div className="grid gap-1.5 leading-none pt-0.5">
          <FormLabel htmlFor="terms" className="text-sm font-medium">
            check label requires some description
          </FormLabel>
          <p className="text-sm text-muted">
            some description here.
          </p>
        </div>
      </div>
    );
  },
  args: {
    name: 'test1', disabled: false,
  },
};


export const withForm: Story = {
  render: (args) => {
    const [value, setValue] = useState(false);
    return (
      <FormField
        innerClass="flex items-center space-x-2"
        label="Some Check Field"
        required
      >
        <Checkbox id="terms" checked={value} onChange={setValue} {...args} />
        <FormLabel htmlFor="terms" className="text-sm">
          Some toggle value
        </FormLabel>
      </FormField>
    );
  },
  args: {
    name: 'test1', onChange: noop, checked: false, disabled: false,
  },
};
