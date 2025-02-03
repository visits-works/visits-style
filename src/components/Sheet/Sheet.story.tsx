import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Sheet from '.';
import Button from '../../elements/Button';
import IconClose from '../../elements/Icons/Close';

const meta = {
  title: 'components/Sheet',
  component: Sheet,
  tags: ['autodocs'],
  args: { open: false },
  argTypes: {
    open: { control: false },
    children: { control: false },
    onOpenChange: { control: false },
  },
} satisfies Meta<typeof Sheet>;

export default meta;

type Story = StoryObj<typeof meta>;

// @ts-ignore
export const base: Story = {
  render: ({ open, ...rest }) => {
    const [showDialog, setShow] = useState(open);
    const toggle = () => setShow((prev) => !prev);
    return (
      <>
        <Button variant="outline" onClick={toggle}>Open Sheet</Button>
        <Sheet {...rest} open={showDialog} onOpenChange={toggle} className="w-[350px] p-2">
          <Button variant="ghost" size="icon" className="absolute top-2 right-2 size-6" onClick={toggle}>
            <IconClose />
          </Button>
          <h2 className="text-xl font-medium">Sheet title</h2>
          <p>hello world!</p>
        </Sheet>
      </>
    );
  },
};
