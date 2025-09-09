import type { Meta, StoryObj } from '@storybook/react-vite';
import Progress, { ProgressProps } from '.';

const meta = {
  title: 'elements/Progress',
  component: Progress,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<ProgressProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const base: Story = {
  args: { value: 20, max: 100, className: 'w-[250px] h-4' },
};
