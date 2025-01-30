import type { Meta, StoryObj } from '@storybook/react';
import Input, { Props } from '.';

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
