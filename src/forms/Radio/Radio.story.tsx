import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Radio, { Props } from '.';
import RadioGroup from './RadioGroup';
import FormField from '../Field/FormField';
import { FormLabel } from 'components';

const meta = {
  title: 'forms/Radio',
  component: Radio,
  tags: ['autodocs'],
} satisfies Meta<Props>;

export default meta;

type Story = StoryObj<typeof meta>;

export const base: Story = {
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Radio id="radio" {...args} />
      <FormLabel htmlFor="radio">Radio Label</FormLabel>
    </div>
  ),
  args: {
    name: 'test1', value: 1, checked: false, disabled: false,
  },
};

export const radioGroup: Story = {
  render: (args) => {
    const [value, setValue] = useState<string | null>('1');
    return (
      <FormField label="Radio Group Example" help="Here is example for Radio group" helpBefore>
        <RadioGroup
          name={args.name}
          disabled={args.disabled}
          className="space-y-2"
          value={value}
          onChange={setValue}
          options={[
            { id: '1', label: 'Radio1' },
            { id: '2', label: 'Radio2' },
            { id: '3', label: 'Radio3' },
          ]}
        />
      </FormField>
    );
  },
  args: { name: 'test1', disabled: false },
  argTypes: { children: { control: false }, checked: { control: false } },
};
