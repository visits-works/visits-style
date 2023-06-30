/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useRef } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Popover, { PopoverRef } from '.';
import TextInput from '../../forms/TextInput';

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

export const base: Story = {
  render: (args) => (
    <div style={{ textAlign: 'center' }}>
      <Popover {...args} label={<button type="button">show</button>}>
        <button type="button" onClick={() => { alert('world!'); }}>hello</button>
        <p>hello world</p>
      </Popover>
    </div>
  ),
};

export const autoPlacement: Story = {
  name: 'auto placement on scroll',
  render: (args) => (
    <>
      <div style={{ width: '50px', height: '80vh' }} />
      <div style={{ textAlign: 'center' }}>
        <Popover {...args} label={<button type="button">show</button>}>
          <div style={{ padding: 50 }}>
            <button type="button" onClick={() => { alert('world!'); }}>hello</button>
            <p>hello world</p>
          </div>
        </Popover>
      </div>
      <div style={{ width: '50px', height: '80vh' }} />
    </>
  ),
};

export const withInput: Story = {
  render: (args) => {
    const [txt, setText] = useState('');
    const onChange = (e) => setText(e.target.value);
    return (
      <Popover {...args} label={<button type="button">show</button>}>
        <TextInput value={txt} onChange={onChange} />
      </Popover>
    );
  },
};

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

export const program: Story = {
  name: 'programatically handle',
  render: (args) => {
    const ref = useRef<PopoverRef | null>(null);
    return (
      <>
        <button type="button" onClick={() => ref.current?.open()}>open</button>
        <Popover
          {...args}
          ref={ref}
          label={<span>show</span>}
        >
          <p>hello world!</p>
          <button type="button" onClick={() => ref.current?.close()}>
            close me!
          </button>
        </Popover>
      </>
    );
  },
};

export const case5: Story = {
  name: 'clickable parent',
  render: (args) => {
    const [clicked, setClicked] = useState(false);
    return (
      <>
        <button onClick={() => setClicked(!clicked)}>
          <span>parent button contents</span><br />
          <Popover {...args} label={<button>click me</button>}>
            <p>hello world</p>
          </Popover>
        </button>
        {clicked ? <div>oh no! your parent click event is triggered!</div> : null}
      </>
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
          <Popover {...props} label={<button type="button">button!</button>}>
            hello world!
          </Popover>
        </div>
      )}
    </div>
  );
}
