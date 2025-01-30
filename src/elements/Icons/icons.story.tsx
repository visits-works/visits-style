import type { Meta, StoryObj } from '@storybook/react';
import * as Icons from '.';

const meta = {
  title: 'elements/Icons',
  component: Icons.IconApproved,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Icons.IconApproved>;

export default meta;

type Story = StoryObj<typeof meta>;

export const base: Story = {
  render: () => (
    <ul className="grid gap-2 gap-y-6" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
      {Object.keys(Icons).map((name) => {
        // @ts-ignore
        const Icon = Icons[name];
        return (
          <li key={name} className="flex justify-center items-center flex-col">
            <Icon width={24} height={24} />
            <small className="mt-2">{name}</small>
          </li>
        );
      })}
    </ul>
  ),
};
