import type { Meta, StoryObj } from '@storybook/react';

import Tooltip from '.';
import Button from '../../elements/Button';

const meta = {
  title: 'components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  argTypes: {
    clientPoint: { defaultValue: false },
    children: { control: false },
  },
  args: {
    label: 'Hello!!!',
    children: <span>Hello world</span>,
    clientPoint: false,
    offset: { x: 0, y: 6 },
    disabled: false,
  },
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const tooltip: Story = {
  args: {
    label: 'Hello!!!',
    children: <span>Hello world</span>,
    clientPoint: false,
    offset: { x: 0, y: 6 },
    disabled: false,
  },
};

export const absolute: Story = {
  render: () => {
    return (
      <div style={{ height: '120vh' }}>
        <Tooltip label="Hello!!!">
          <button style={{ position: 'fixed', top: '50px' }}>Hello world</button>
        </Tooltip>
      </div>
    );
  },
};
