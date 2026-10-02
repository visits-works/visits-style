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
  },
  args: {
    label: 'Hello!!!',
    render: (props) => <span {...props}>Hello world</span>,
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
    render: (props) => <span {...props}>Hello world</span>,
    clientPoint: false,
    offset: { x: 0, y: 6 },
    disabled: false,
  },
};

export const absolute: Story = {
  render: () => {
    return (
      <div style={{ height: '120vh' }}>
        <Tooltip
          label="Hello!!!"
          render={(props) => <Button {...props} style={{ position: 'fixed', top: '50px' }}>Hello world</Button>}
        />
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
      <Tooltip
        label="tooltip1111"
        render={(props) => <Button {...props} onClick={() => setNum(num - 1)} disabled={num <= 0}>button 1</Button>}
        disabled={num <= 0}
      />
      <Tooltip
        label="tooltip2222"
        render={(props) => <Button {...props} onClick={() => setNum(num + 1)} disabled={num > 5}>button 2</Button>}
      />
    </div>
  );
}