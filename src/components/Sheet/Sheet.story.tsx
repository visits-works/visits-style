import { useState, type SVGAttributes } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import Sheet from '.';
import Button from '../../elements/Button';

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

function IconClose(props: SVGAttributes<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" {...props}>
      <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M26 26l-12.5-12.5L26 1" />
        <path d="M1 26l12.5-12.5L1 1" />
      </g>
    </svg>
  );
}

type Story = StoryObj<typeof meta>;

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
