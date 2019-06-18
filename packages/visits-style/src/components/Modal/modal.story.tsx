import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Modal from '.';
import Button from '../../elements/Button';
import TextButton from '../../elements/Button/TextButton';

const CloseButton: any = {
  position: 'absolute',
  padding: '0.75rem',
  top: 0,
  right: 0,
};

storiesOf('components|Modal', module)
  .add('default', () => (
    <div>
      <Modal
        closeModal={action('close')}
        style={{ padding: '1rem' }}
        show={boolean('show', true)}
        timeout={number('timeout', 200)}
        closeOnOverlay={boolean('close with overlay click', true)}
      >
        <header style={{ padding: '0.75rem 0.325rem', textAlign: 'center' }}>
          <h3>Modal Title</h3>
          <TextButton style={CloseButton} pure>X</TextButton>
        </header>
        <section>
          Modal body text goes here.
        </section>
        <footer>
          <Button color="primary" style={{ width: '100%' }}>Save changes</Button>
        </footer>
      </Modal>
      <div style={{ background: 'red', height: '120vh', width: '50px' }} />
    </div>
  ))
  .add('onScroll', () => (
    <Modal
      closeModal={action('close')}
      style={{ padding: '1rem' }}
      show={boolean('show', true)}
      timeout={number('timeout', 200)}
      closeOnOverlay={boolean('close with overlay click', true)}
    >
      <header style={{ padding: '0.75rem 0.325rem', textAlign: 'center' }}>
        <h3>Modal Title</h3>
        <TextButton style={CloseButton} pure>X</TextButton>
      </header>
      <section>
        Modal body text goes here.<br />
        Modal body text goes here.<br />
        Modal body text goes here.<br />
        Modal body text goes here.<br />
        Modal body text goes here.<br />
        Modal body text goes here.<br />
        Modal body text goes here.<br />
        Modal body text goes here.<br />
        Modal body text goes here.<br />
        Modal body text goes here.<br />
        Modal body text goes here.<br />
        Modal body text goes here.<br />
        Modal body text goes here.<br />
        Modal body text goes here.<br />
        Modal body text goes here.<br />
        Modal body text goes here.<br />
        Modal body text goes here.<br />
        Modal body text goes here.<br />
        Modal body text goes here.<br />
        Modal body text goes here.<br />
        Modal body text goes here.<br />
        Modal body text goes here.<br />
        Modal body text goes here.<br />
        Modal body text goes here.<br />
        Modal body text goes here.<br />
        Modal body text goes here.<br />
        Modal body text goes here.<br />
        Modal body text goes here.<br />
        Modal body text goes here.<br />
        Modal body text goes here.<br />
        Modal body text goes here.<br />
        Modal body text goes here.<br />
      </section>
      <footer>
        <Button color="primary" style={{ width: '100%' }}>Save changes</Button>
      </footer>
    </Modal>
  ))
  .add('nested', () => (
    <div>
      <div style={{ background: 'red', height: '120vh', width: '50px' }} />
      <Modal
        closeModal={action('close')}
        style={{ padding: '1rem' }}
        show={boolean('show', true)}
        timeout={number('timeout', 200)}
        closeOnOverlay={boolean('close with overlay click', true)}
      >
        <header style={{ padding: '0.75rem 0.325rem', textAlign: 'center' }}>
          <h3>Modal Title</h3>
          <TextButton style={CloseButton} pure>X</TextButton>
        </header>
        <section>
          Modal body text goes here.
        </section>
        <footer>
          <Button color="primary" style={{ width: '100%' }}>Save changes</Button>
        </footer>
      </Modal>
      <Modal
        closeModal={action('nest-close')}
        style={{ padding: '1rem' }}
        show={boolean('nest-show', true)}
        timeout={number('timeout', 200)}
        closeOnOverlay={boolean('close with overlay click (nested)', true)}
      >
        <header style={{ padding: '0.75rem 0.325rem', textAlign: 'center' }}>
          <h3>Modal Title</h3>
          <TextButton style={CloseButton} pure>X</TextButton>
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
  ));
