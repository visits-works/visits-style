import { useState, useRef, useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Popover, { PopoverRef } from '.';
import Tooltip from '../Tooltip';
import Button from '../../elements/Button';
import TextInput from '../../forms/Input';

const positionList = [
  'auto',
  'top',
  'left',
  'right',
  'bottom',
  'top-start',
  'top-end',
  'bottom-start',
  'bottom-end',
];

function noop() {}

const meta = {
  title: 'components/Popover',
  component: Popover,
  tags: ['autodocs'],
  argTypes: {
    label: { control: false },
    children: { control: false },
    offset: { defaultValue: { x: 0, y: 6 } },
  },
  parameters: {
    control: {
      position: positionList,
    },
  },
} satisfies Meta<typeof Popover>;

export default meta;

type Story = StoryObj<typeof meta>;

const Label = <Button variant="outline" type="button">show</Button>;

// @ts-expect-error
export const base: Story = {
  render: (args) => (
    <div style={{ textAlign: 'center' }}>
      <Popover {...args} label={Label}>
        <Button type="button" onClick={() => { alert('world!'); }}>hello</Button>
        <p>hello world</p>
      </Popover>
    </div>
  ),
};

// @ts-expect-error
export const autoPlacement: Story = {
  name: 'auto placement on scroll',
  render: (args) => (
    <>
      <div style={{ width: '50px', height: '80vh' }} />
      <div style={{ textAlign: 'center' }}>
        <Popover {...args} style={{ padding: 50 }} label={Label}>
          <button type="button" onClick={() => { alert('world!'); }}>hello</button>
          <p>hello world</p>
        </Popover>
      </div>
      <div style={{ width: '50px', height: '80vh' }} />
    </>
  ),
};

// @ts-expect-error
export const withInput: Story = {
  render: (args) => {
    const [txt, setText] = useState('');
    const onChange = (e: any) => setText(e.target.value);
    return (
      <Popover {...args} label={Label}>
        <TextInput value={txt} onChange={onChange} />
      </Popover>
    );
  },
};

// @ts-expect-error
export const absoluteParent: Story = {
  name: 'reference button with absolute position',
  render: (args) => (
    <div style={{ maxHeight: '80vh', overflowY: 'auto' }}>
      <Test {...args} />
      <Test {...args} />
      <Test {...args} />
      <Test {...args} />
      <Test {...args} />
      <Test {...args} />
    </div>
  ),
};

// @ts-expect-error
export const program: Story = {
  name: 'programatically handle',
  render: (args) => {
    const ref = useRef<PopoverRef | null>(null);
    useEffect(() => {
      ref.current?.open();
    }, []);
    return (
      <>
        <Button variant="link" type="button" onClick={() => ref.current?.open()}>open</Button>
        <Popover
          {...args}
          ref={ref}
          label={<span>show</span>}
        >
          <p>hello world!</p>
          <Button variant="link" type="button" onClick={() => ref.current?.close()}>
            close me!
          </Button>
        </Popover>
      </>
    );
  },
};

// @ts-expect-error
export const case5: Story = {
  name: 'clickable parent',
  render: (args) => {
    const [clicked, setClicked] = useState(false);
    return (
      <>
        <a className="hover:underline" onClick={() => setClicked(!clicked)}>
          <span>parent button contents</span><br />
          <Popover {...args} label={Label}>
            <p>hello world</p>
          </Popover>
        </a>
        {clicked ? <div>oh no! your parent click event is triggered!</div> : null}
      </>
    );
  },
};

// @ts-expect-error
export const tooltip: Story = {
  name: 'popover with tooltip',
  render: (args) => (
    <Popover {...args} label={Label}>
      <Tooltip label="tooltip!">
        <p>hello world</p>
      </Tooltip>
    </Popover>
  ),
};

// @ts-expect-error
export const manualClose: Story = {
  name: 'popover close manually',
  render: (args) => {
    const ref = useRef<PopoverRef>(null);
    return (
      <Popover ref={ref} {...args} label={Label} onManualClose={noop}>
        <p>hello world</p>
        <button type="button" onClick={() => ref.current?.close()}>
          close!
        </button>
      </Popover>
    );
  },
};

// @ts-expect-error
export const autoWidth: Story = {
  name: 'auth width',
  render: (args) => {
    const [width, setWidth] = useState(100);
    return (
      <Popover
        {...args}
        label={<Button variant="outline" style={{ width: '250px' }}>click me</Button>}
        onOpen={(e) => {
          if (!e) return;
          setWidth(e.getBoundingClientRect().width);
        }}
      >
        <p style={{ width }}>hello world</p>
      </Popover>
    );
  },
};

function Test(props: any) {
  const [show, setShow] = useState(false);
  return (
    <div
      onPointerOver={() => setShow(true)}
      onPointerLeave={() => setShow(false)}
      style={{ position: 'relative', width: '40vw', height: '20vh', background: '#eee', marginBottom: 3 }}
    >
      {show && (
        <div style={{ position: 'absolute', right: 4, top: 0, transform: 'translateY(100%)', zIndex: 10 }}>
          <Popover {...props} label={<Button variant="ghost" type="button">button!</Button>}>
            hello world!
          </Popover>
        </div>
      )}
    </div>
  );
}
