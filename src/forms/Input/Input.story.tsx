import type { Meta, StoryObj } from '@storybook/react';
import Input, { Props } from '.';
import FormField from '../Field/FormField';

const meta = {
  title: 'forms/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<Props>;

export default meta;

type Story = StoryObj<typeof meta>;

const decorator: Story['decorators'] = (Story) => (
  <div className="w-full" style={{ maxWidth: '350px' }}>
    <Story />
  </div>
);

export const base: Story = {
  decorators: [decorator],
  args: { name: 'test1', defaultValue: '', placeholder: 'placeholder...' },
};

export const file: Story = {
  decorators: [decorator],
  args: { name: 'test1', type: 'file', defaultValue: '', placeholder: 'placeholder...' },
};

export const disabled: Story = {
  decorators: [decorator],
  args: { name: 'test1', placeholder: 'placeholder...', disabled: true },
};

export const withField: Story = {
  name: 'With FormField',
  decorators: [decorator],
  render: (args) => (
    <FormField htmlFor="test-input" label="Username" help="This is your public display name" required>
      <Input id="test-input" {...args} />
    </FormField>
  ),
  args: { name: 'test1', placeholder: 'Your name here..', disabled: false },
};

export const withFieldError: Story = {
  name: 'With FormField error',
  decorators: [decorator],
  render: (args) => (
    <FormField
      htmlFor="test-input"
      label="Username"
      help="This is your public display name"
      error="invalid username"
    >
      <Input id="test-input" {...args} />
    </FormField>
  ),
  args: { name: 'test1', placeholder: 'Your name here..', disabled: false },
};
