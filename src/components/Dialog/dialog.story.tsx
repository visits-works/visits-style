import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Dialog, { DialogFooter, DialogHeader, DialogContent } from '.';
import Button from '../../elements/Button';
import TextInput from '../../forms/TextInput';

const meta = {
  title: 'components/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  args: { open: false, timeout: 200, closeOnOverlay: true, closeOnEsc: true },
  argTypes: {
    open: { control: false },
    children: { control: false },
    onOpenChange: { control: false },
  },
} satisfies Meta<typeof Dialog>;

export default meta;

type Story = StoryObj<typeof meta>;

// @ts-ignore
export const base: Story = {
  render: ({ open, ...rest }) => {
    const [showDialog, setShow] = useState(open);
    const toggle = () => setShow((prev) => !prev);
    return (
      <>
        <Button variant="ghost" onClick={toggle}>show modal</Button>
        <Dialog {...rest} size="small" open={showDialog} onOpenChange={toggle}>
          <DialogHeader onClose={toggle}><h3>Dialog Title</h3></DialogHeader>
          <p>Dialog body text goes here.</p>
          <DialogFooter>
            <Button variant="outline" onClick={toggle}>Close</Button>
            <Button>Save changes</Button>
          </DialogFooter>
        </Dialog>
      </>
    );
  },
};

// @ts-ignore
export const onScroll: Story = {
  render: (args) => {
    const [showDialog, setShow] = useState(false);
    const toggle = () => setShow((prev) => !prev);
    return (
      <>
        <Button variant="ghost" onClick={toggle}>show modal</Button>
        <Dialog {...args} size="small" open={showDialog} onOpenChange={toggle}>
          <DialogHeader onClose={toggle}><h3>Dialog Title</h3></DialogHeader>
          <section>
            {Array.from({ length: 100 }).map((_, i) => (
              <p key={i}>Dialog body text goes here.</p>
            ))}
          </section>
          <DialogFooter>
            <Button variant="outline" onClick={toggle}>Close</Button>
            <Button>Save changes</Button>
          </DialogFooter>
        </Dialog>
      </>
    )
  },
};

// @ts-ignore
export const nested: Story = {
  render: (args) => {
    const [parent, showParent] = useState(false);
    const [child, showChild] = useState(false);
    const toggleParent = () => showParent((prev) => !prev);
    const toggleChild = () => showChild((prev) => !prev);
    return (
      <div>
        <Button onClick={toggleParent}>show modal</Button>
        <Dialog {...args} size="medium" open={parent} onOpenChange={toggleParent}>
          <DialogHeader onClose={toggleParent}><h3>Parent Title</h3></DialogHeader>
          <p>Dialog body text goes here.</p>
          <DialogFooter>
            <Button variant="outline" onClick={toggleParent}>Close</Button>
            <Button onClick={toggleChild}>Show Child</Button>
          </DialogFooter>
        </Dialog>
        <Dialog {...args} size="small" open={child} onOpenChange={toggleChild}>
          <DialogHeader onClose={toggleChild}><h3>Child Title</h3></DialogHeader>
          <section>
            <p>Nested Dialog body text goes here.</p>
            <div style={{ height: '95vh', color: 'blue', width: '50px' }} />
          </section>
          <DialogFooter align="center">
            <Button variant="outline" onClick={toggleChild}>Close</Button>
          </DialogFooter>
        </Dialog>
      </div>
    );
  },
};

// @ts-ignore
export const input: Story = {
  render: ({ open, ...rest }) => {
    const [showDialog, setShow] = useState(open);
    const toggle = () => setShow((prev) => !prev);
    return (
      <>
        <Button onClick={toggle}>show modal</Button>
        <Dialog {...rest} size="large" open={showDialog} onOpenChange={toggle}>
          <DialogHeader onClose={toggle}><h3>Dialog Title</h3></DialogHeader>
          <section>
            <p>Dialog body text goes here.</p>
            <TextInput />
          </section>
          <DialogFooter>
            <Button variant="outline" onClick={toggle}>Close</Button>
            <Button>Save changes</Button>
          </DialogFooter>
        </Dialog>
      </>
    );
  },
};

// @ts-ignore
export const external: Story = {
  render: (args) => {
    const [showDialog, setShow] = useState(false);
    const toggle = () => setShow((prev) => !prev);
    const handleExternal = (e: any) => {
      e.stopPropagation();
      alert('outside');
    };

    return (
      <>
        <Button onClick={toggle}>show modal</Button>
        <Dialog {...args} open={showDialog} onOpenChange={toggle}>
          <DialogContent size="medium">
            <DialogHeader onClose={toggle}><h3>Dialog Title</h3></DialogHeader>
            <p>Dialog body text goes here.</p>
            <DialogFooter>
              <Button variant="outline" onClick={toggle}>Close</Button>
              <Button>Save changes</Button>
            </DialogFooter>
          </DialogContent>
          <div className="text-center mt-2">
            <Button variant="danger" onClick={handleExternal}>outside!</Button>
          </div>
        </Dialog>
      </>
    );
  },
};

export const onExit: Story = {
  render: (args) => {
    const [showDialog, setShow] = useState(false);
    const [text, setText] = useState('モーダルを開く');

    const toggle = () => {
      setText(showDialog ? '閉じる中...' : '表示中...')
      setShow((prev) => !prev);
    };

    return (
      <>
        <div className="pb-15">
          <Button variant="outline" onClick={toggle}>{text}</Button>
        </div>
        <Dialog {...args} open={showDialog} size="small" onOpenChange={toggle} onExited={() => setText('モーダルを開く')}>
          <DialogHeader onClose={toggle}><h3>Dialog Title</h3></DialogHeader>
          <p>Dialog body text goes here.</p>
          <DialogFooter>
            <Button variant="outline" onClick={toggle}>Close</Button>
            <Button>Save changes</Button>
          </DialogFooter>
        </Dialog>
      </>
    );
  },
  // @ts-ignore
  args: { timeout: 500 },
};
