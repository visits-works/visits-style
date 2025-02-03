import type { Meta, StoryObj } from '@storybook/react';
import Switch, { Props } from '.';

const meta = {
  title: 'forms/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<Props>;

export default meta;

type Story = StoryObj<typeof meta>;

export const base: Story = {
  args: { name: 'test1', value: '1' },
};
