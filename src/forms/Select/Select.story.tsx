import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Select, { Props } from '.';
import NativeSelect from './native';
import Tooltip from '../../components/Tooltip';

const options = [
  { value: 1, label: 'options1' },
  { value: 2, label: 'options2' },
  { value: 3, label: 'options3' },
  { value: 4, label: 'options4' },
  { value: 5, label: 'options5' },
  { value: 6, label: 'options6' },
];

const meta = {
  title: 'forms/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    value: { controls: false },
    options: { controls: false },
  },
} satisfies Meta<Props<any>>;

export default meta;

type Story = StoryObj<typeof meta>;

export const base: Story = {
  render: (args) => {
    const [value, setValue] = useState(0);
    return <Select {...args} options={options} value={value} onChange={setValue} />;
  },
  // @ts-expect-error
  args: {
    options,
    className: 'max-w-[370px]',
    placeholder: 'select value...',
  },
};

export const multiple: Story = {
  render: (args) => {
    const [value, setValue] = useState<number[]>([]);
    const handleChange = (val: number) => {
      setValue((prev) => {
        const next = [...prev];
        const idx = next.indexOf(val);
        if (idx > -1) {
          next.splice(idx, 1);
        } else {
          next.push(val);
        }
        return next;
      });
    };
    return <Select {...args} options={options} value={value} onChange={handleChange} />;
  },
  // @ts-expect-error
  args: {
    options,
    className: 'max-w-[370px]',
    placeholder: 'select multiple values...',
  },
};

export const withClear: Story = {
  render: (args) => {
    const [value, setValue] = useState<number | null>(null);
    const handleClear = () => setValue(null);
    return (
      <Select {...args} options={options} value={value} onChange={setValue} onClear={handleClear} />
    );
  },
  // @ts-expect-error
  args: {
    options,
    className: 'max-w-[370px]',
    placeholder: 'select multiple values...',
  },
};

export const withSection: Story = {
  render: (args) => {
    const [value, setValue] = useState<number | null>(null);
    return (
      <Select
        {...args}
        options={[
          'section1',
          { value: 1, label: 'options1' },
          { value: 2, label: 'options2' },
          { value: 3, label: 'options3' },
          'section2',
          { value: 4, label: 'options4' },
          { value: 5, label: 'options5' },
          { value: 6, label: 'options6' },
        ]}
        value={value}
        onChange={setValue}
      />
    );
  },
  // @ts-expect-error
  args: {
    options,
    className: 'max-w-[370px]',
    placeholder: 'select multiple values...',
  },
};

export const withCustom: Story = {
  render: (args) => {
    const [value, setValue] = useState<number | null>(null);
    return (
      <Select
        {...args}
        options={options}
        value={value}
        onChange={setValue}
        renderItem={(item, config) => {
          if (typeof item === 'string') return <h5>{item}</h5>;
          return (
            <Tooltip label={`label-${item.label}`} position="left">
              <button
                key={item.value}
                type="button"
                className="w-full text-left hover:bg-accent px-2 py-1 rounded"
                aria-selected={config.selected}
                onClick={config.onChange}
              >
                <span className="mr-1">{config.selected ? 'X' : '-'}</span>
                {item.label}
              </button>
            </Tooltip>
          );
        }}
      />
    );
  },
  // @ts-expect-error
  args: {
    options,
    className: 'max-w-[370px]',
    placeholder: 'select multiple values...',
  },
};

export const native: Story = {
  render: ({ className, placeholder, error }) => {
    const [value, setValue] = useState<string>('');
    return (
      <NativeSelect
        className={className}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        error={error}
      >
        <option value="1">option1</option>
      </NativeSelect>
    );
  },
  // @ts-expect-error
  args: {
    options,
    className: 'max-w-[370px]',
    placeholder: 'select multiple values...',
  },
};
