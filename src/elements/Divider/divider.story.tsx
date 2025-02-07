import type { Meta, StoryObj } from '@storybook/react';
import Divider from '.';

const meta = {
  title: 'elements/Divider',
  component: Divider,
  tags: ['autodocs'],
  argTypes: {
    orientation: ['horizontal', 'vertical'],
  },
} satisfies Meta<typeof Divider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const base: Story = {
  render: () => (
    <div>
      <div>Content</div>
      <Divider className="my-2" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Blog</div>
        <Divider orientation="vertical" />
        <div>Docs</div>
        <Divider orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
  ),
};
