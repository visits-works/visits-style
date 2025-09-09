import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

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
          <Button style={{ position: 'fixed', top: '50px' }}>Hello world</Button>
        </Tooltip>
      </div>
    );
  },
};
export const multiple: Story = {
  render: () => <Multiple />,
};

function Multiple() {
  const [num, setNum] = useState(0);
  return (
    <div>
      <Tooltip label="tooltip1111" disabled={num <= 0}>
        <Button onClick={() => setNum(num - 1)} disabled={num <= 0}>button 1</Button>
      </Tooltip>
      <Tooltip label="tooltip2222">
        <Button onClick={() => setNum(num + 1)} disabled={num > 5}>button 2</Button>
      </Tooltip>
    </div>
  );
}