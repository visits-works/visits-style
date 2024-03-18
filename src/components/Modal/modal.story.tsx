/* eslint-disable import/no-extraneous-dependencies, react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Modal from '.';
import Button from '../../elements/Button';
import Box from '../../elements/Box';
import TextButton from '../../elements/Button/TextButton';
import TextInput from '../../forms/TextInput';
import Close from '../../elements/Icons/Close';

const CloseButton: any = {
  position: 'absolute',
  padding: '0.75rem',
  top: 0,
  right: 0,
};

const meta = {
  title: 'components/Modal',
  component: Modal,
  tags: ['autodocs'],
  args: { show: false, timeout: 200, closeOnOverlay: true, closeOnEsc: true },
  argTypes: {
    show: { control: false },
    children: { control: false },
    closeModal: { control: false },
  },
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

// @ts-ignore
export const base: Story = {
  render: ({ show, ...rest }) => {
    const [showModal, setShow] = useState(show);
    const toggle = () => setShow((prev) => !prev);
    return (
      <>
        <button onClick={toggle}>show modal</button>
        <Modal {...rest} show={showModal} closeModal={toggle}>
          <Box color="background">
            <header style={{ padding: '0.75rem 0.325rem', textAlign: 'center' }}>
              <h3>Modal Title</h3>
              <TextButton style={CloseButton} onClick={toggle}><Close width="12" height="12" /></TextButton>
            </header>
            <section>
              Modal body text goes here.
            </section>
            <footer>
              <Button color="primary" style={{ width: '100%' }}>Save changes</Button>
            </footer>
          </Box>
        </Modal>
      </>
    );
  },
};

// @ts-ignore
export const onScroll: Story = {
  render: (args) => {
    const [showModal, setShow] = useState(false);
    const toggle = () => setShow((prev) => !prev);
    return (
      <>
        <button onClick={toggle}>show modal</button>
        <Modal {...args} show={showModal} closeModal={toggle}>
          <Box color="background">
            <header style={{ padding: '0.75rem 0.325rem', textAlign: 'center' }}>
              <h3>Modal Title</h3>
              <TextButton style={CloseButton} onClick={toggle}><Close width="12" height="12" /></TextButton>
            </header>
            <section>
              {Array.from({ length: 100 }).map((_, i) => (
                <p key={i}>Modal body text goes here.</p>
              ))}
            </section>
            <footer>
              <Button color="primary" style={{ width: '100%' }}>Save changes</Button>
            </footer>
          </Box>
        </Modal>
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
        <button onClick={toggleParent}>show modal</button>
        <Modal {...args} show={parent} closeModal={toggleParent}>
          <Box color="background">
            <header style={{ padding: '0.75rem 0.325rem', textAlign: 'center' }}>
              <h3>Modal Title</h3>
              <TextButton style={CloseButton} onClick={toggleParent}><Close width="12" height="12" /></TextButton>
            </header>
            <section>
              Modal body text goes here.
            </section>
            <footer>
              <Button color="primary" style={{ width: '100%' }} onClick={toggleChild}>Show Child</Button>
            </footer>
          </Box>
        </Modal>
        <Modal {...args} show={child} closeModal={toggleChild}>
          <Box color="background">
            <header style={{ padding: '0.75rem 0.325rem', textAlign: 'center' }}>
              <h3>Modal Title</h3>
              <TextButton style={CloseButton} onClick={toggleChild}><Close width="12" height="12" /></TextButton>
            </header>
            <section>
              Nested Modal body text goes here.
              <div style={{ height: '95vh', color: 'blue', width: '50px' }} />
            </section>
            <footer>
              <Button color="primary" style={{ width: '100%' }}>Save changes</Button>
            </footer>
          </Box>
        </Modal>
      </div>
    );
  },
};

// @ts-ignore
export const input: Story = {
  render: ({ show, ...rest }) => {
    const [showModal, setShow] = useState(show);
    const toggle = () => setShow((prev) => !prev);
    return (
      <>
        <button onClick={toggle}>show modal</button>
        <Modal {...rest} show={showModal} closeModal={toggle}>
          <Box color="background">
            <header style={{ padding: '0.75rem 0.325rem', textAlign: 'center' }}>
              <h3>Modal Title</h3>
              <TextButton style={CloseButton} onClick={toggle}><Close width="12" height="12" /></TextButton>
            </header>
            <section>
              Modal body text goes here.
              <TextInput />
            </section>
            <footer>
              <Button color="primary" style={{ width: '100%' }}>Save changes</Button>
            </footer>
          </Box>
        </Modal>
      </>
    );
  },
};

// @ts-ignore
export const external: Story = {
  render: (args) => {
    const [showModal, setShow] = useState(false);
    const toggle = () => setShow((prev) => !prev);
    const handleExternal = (e: any) => {
      e.stopPropagation();
      alert('outside');
    };

    return (
      <>
        <button onClick={toggle}>show modal</button>
        <Modal {...args} show={showModal} closeModal={toggle}>
          <Box color="background">
            <header style={{ padding: '0.75rem 0.325rem', textAlign: 'center' }}>
              <h3>Modal Title</h3>
              <TextButton style={CloseButton} onClick={toggle}><Close width="12" height="12" /></TextButton>
            </header>
            <section>
              Modal body text goes here.
              <TextInput />
            </section>
            <footer>
              <Button color="primary" style={{ width: '100%' }}>Save changes</Button>
            </footer>
          </Box>
          <button onClick={handleExternal}>outside!</button>
        </Modal>
      </>
    );
  },
};

export const onExit: Story = {
  render: (args) => {
    const [showModal, setShow] = useState(false);
    const [text, setText] = useState('モーダルを開く');

    const toggle = () => {
      setText(showModal ? '閉じる中...' : '開く中...')
      setShow((prev) => !prev);
    };

    return (
      <>
        <button onClick={toggle}>{text}</button>
        <Modal {...args} show={showModal} closeModal={toggle} onExited={() => setText('モーダルを開く')}>
          <Box color="background">
            <header style={{ padding: '0.75rem 0.325rem', textAlign: 'center' }}>
              <h3>Modal Title</h3>
              <TextButton style={CloseButton} onClick={toggle}><Close width="12" height="12" /></TextButton>
            </header>
            <section>
              Modal body text goes here.
            </section>
            <footer>
              <Button color="primary" style={{ width: '100%' }}>Save changes</Button>
            </footer>
          </Box>
        </Modal>
      </>
    );
  },
  // @ts-ignore
  args: { timeout: 500 },
};
