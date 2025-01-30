/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Radio, { Props } from '.';
import RadioGroup from './RadioGroup';

const meta = {
  title: 'forms/Radio',
  component: Radio,
  tags: ['autodocs'],
} satisfies Meta<Props>;

export default meta;

type Story = StoryObj<typeof meta>;

export const base: Story = {
  args: {
    name: 'test1', value: 1, checked: false, disabled: false,
  },
};

export const radioGroup: Story = {
  render: (args) => {
    const [value, setValue] = useState<string | null>('1');
    return (
      <RadioGroup
        name={args.name}
        disabled={args.disabled}
        value={value}
        onChange={setValue}
        options={[
          { id: '1', label: 'Radio1' },
          { id: '2', label: 'Radio2' },
          { id: '3', label: 'Radio3' },
        ]}
      />
    );
  },
  args: { name: 'test1', disabled: false },
  argTypes: { children: { control: false }, checked: { control: false } },
};

// export const withField: Story = {
//   render: (args) => {
//     const [value, setValue] = useState('1');
//     return (
//       <Field label="test-label" required>
//         <Radio name="test1" value="2" checked={value === '1'} onChange={() => setValue('1')}>Radio1</Radio>
//         <Radio name="test1" value="2" checked={value === '2'} onChange={() => setValue('2')}>Radio2</Radio>
//         <Radio name="test1" value="3" checked={value === '3'} onChange={() => setValue('3')}>Radio3</Radio>
//       </Field>
//     );
//   },
//   argTypes: {
//     children: { controls: false },
//     checked: { controls: false },
//     name: { controls: false },
//     value: { controls: false },
//   },
// };
