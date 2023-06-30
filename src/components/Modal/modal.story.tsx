/* eslint-disable import/no-extraneous-dependencies, react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Modal from '.';
import Button from '../../elements/Button';
import TextButton from '../../elements/Button/TextButton';
import TextInput from '../../forms/TextInput';

const colorList = [
  '',
  'primary',
  'info',
  'link',
  'success',
  'warning',
  'danger',
  'dark',
  'backgroud',
];

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
    external: { control: false },
  },
  parameters: { controls: { color: colorList } },
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const base: Story = {
  render: ({ show, ...rest }) => {
    const [showModal, setShow] = useState(show);
    const toggle = () => setShow((prev) => !prev);
    return (
      <>
        <button onClick={toggle}>show modal</button>
        <Modal {...rest} show={showModal} closeModal={toggle}>
          <header style={{ padding: '0.75rem 0.325rem', textAlign: 'center' }}>
            <h3>Modal Title</h3>
            <TextButton style={CloseButton} pure onClick={toggle}>X</TextButton>
          </header>
          <section>
            Modal body text goes here.
          </section>
          <footer>
            <Button color="primary" style={{ width: '100%' }}>Save changes</Button>
          </footer>
        </Modal>
      </>
    );
  },
};

export const onScroll: Story = {
  render: (args) => {
    const [showModal, setShow] = useState(false);
    const toggle = () => setShow((prev) => !prev);
    return (
      <>
        <button onClick={toggle}>show modal</button>
        <Modal {...args} show={showModal} closeModal={toggle}>
          <header style={{ padding: '0.75rem 0.325rem', textAlign: 'center' }}>
            <h3>Modal Title</h3>
            <TextButton style={CloseButton} pure onClick={toggle}>X</TextButton>
          </header>
          <section>
            {Array.from({ length: 100 }).map((_, i) => (
              <p key={i}>Modal body text goes here.</p>
            ))}
          </section>
          <footer>
            <Button color="primary" style={{ width: '100%' }}>Save changes</Button>
          </footer>
        </Modal>
      </>
    )
  },
};

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
          <header style={{ padding: '0.75rem 0.325rem', textAlign: 'center' }}>
            <h3>Modal Title</h3>
            <TextButton style={CloseButton} pure onClick={toggleParent}>X</TextButton>
          </header>
          <section>
            Modal body text goes here.
          </section>
          <footer>
            <Button color="primary" style={{ width: '100%' }} onClick={toggleChild}>Show Child</Button>
          </footer>
        </Modal>
        <Modal {...args} show={child} closeModal={toggleChild}>
          <header style={{ padding: '0.75rem 0.325rem', textAlign: 'center' }}>
            <h3>Modal Title</h3>
            <TextButton style={CloseButton} pure onClick={toggleChild}>X</TextButton>
          </header>
          <section>
            Nested Modal body text goes here.
            <div style={{ height: '95vh', color: 'blue', width: '50px' }} />
          </section>
          <footer>
            <Button color="primary" style={{ width: '100%' }}>Save changes</Button>
          </footer>
        </Modal>
      </div>
    );
  },
};

export const input: Story = {
  render: ({ show, ...rest }) => {
    const [showModal, setShow] = useState(show);
    const toggle = () => setShow((prev) => !prev);
    return (
      <>
        <button onClick={toggle}>show modal</button>
        <Modal {...rest} show={showModal} closeModal={toggle}>
          <header style={{ padding: '0.75rem 0.325rem', textAlign: 'center' }}>
            <h3>Modal Title</h3>
            <TextButton style={CloseButton} pure onClick={toggle}>X</TextButton>
          </header>
          <section>
            Modal body text goes here.
            <TextInput />
          </section>
          <footer>
            <Button color="primary" style={{ width: '100%' }}>Save changes</Button>
          </footer>
        </Modal>
      </>
    );
  },
};

export const external: Story = {
  render: (args) => {
    const [showModal, setShow] = useState(false);
    const toggle = () => setShow((prev) => !prev);
    return (
      <>
        <button onClick={toggle}>show modal</button>
        <Modal {...args} show={showModal} closeModal={toggle} external={<button onClick={() => alert('outside')}>outside!</button>}>
          <header style={{ padding: '0.75rem 0.325rem', textAlign: 'center' }}>
            <h3>Modal Title</h3>
            <TextButton style={CloseButton} pure onClick={toggle}>X</TextButton>
          </header>
          <section>
            Modal body text goes here.
            <TextInput />
          </section>
          <footer>
            <Button color="primary" style={{ width: '100%' }}>Save changes</Button>
          </footer>
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
          <header style={{ padding: '0.75rem 0.325rem', textAlign: 'center' }}>
            <h3>Modal Title</h3>
            <TextButton style={CloseButton} pure onClick={toggle}>X</TextButton>
          </header>
          <section>
            Modal body text goes here.
          </section>
          <footer>
            <Button color="primary" style={{ width: '100%' }}>Save changes</Button>
          </footer>
        </Modal>
      </>
    );
  },
  args: { timeout: 500 },
};
