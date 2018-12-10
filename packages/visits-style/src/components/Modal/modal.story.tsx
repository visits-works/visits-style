import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Modal from '.';
import Button from '../Button';

const CloseButton: any = {
  position: 'absolute',
  padding: '0.75rem',
  top: 0,
  right: 0,
};

storiesOf('components|Modal', module)
  .add('default', () => (
    <Modal
      title={(
        <header style={{ padding: '0.75rem 0.325rem', textAlign: 'center' }}>
          <h3>Modal Title</h3>
          <a style={CloseButton}>X</a>
        </header>
      )}
      // @ts-ignore
      size={number('size', 4)}
      closeModal={action('close')}
      footer={(
        <Button color="primary">Save changes</Button>
      )}
      style={{ padding: '1rem' }}
      show={boolean('show', true)}
      closeOnOverlay={boolean('close with overlay click', true)}
    >
      Modal body text goes here.
    </Modal>
  ))
  .add('onScroll', () => (
    <Modal
      title={(
        <header style={{ padding: '0.75rem 0.325rem', textAlign: 'center' }}>
          <h3>Modal Title</h3>
          <a style={CloseButton}>X</a>
        </header>
      )}
      // @ts-ignore
      size={number('size', 4)}
      closeModal={action('close')}
      footer={(
        <Button color="primary">Save changes</Button>
      )}
      style={{ padding: '1rem' }}
      show={boolean('show', true)}
      closeOnOverlay={boolean('close with overlay click', true)}
    >
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
    </Modal>
  ));

