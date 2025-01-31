import type { Meta, StoryObj } from '@storybook/react';
import Textarea, { Props } from '.';
import FormField from '../Field/FormField';

const meta = {
  title: 'forms/Textarea',
  component: Textarea,
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
  args: { name: 'test1', placeholder: 'placeholder...', disabled: false, error: false },
};

export const withField: Story = {
  name: 'With FormField',
  decorators: [decorator],
  render: (args) => (
    <FormField htmlFor="test-input" label="Username" help="This is your public display name" required>
      <Textarea id="test-input" {...args} />
    </FormField>
  ),
  args: { name: 'test1', placeholder: 'Your name here..', disabled: false },
};
