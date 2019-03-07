import React, { useState, useCallback } from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import Collapse from '.';
import Box from '../Box';

function Default() {
  const [show, setShow] = useState(false);
  const onClick = useCallback(() => { setShow(!show); }, [show]);

  return (
    <Collapse
      header={<button onClick={onClick}>click me</button>}
      show={show}
    >
      <div>Hello world!</div>
      <div>Hello world!</div>
      <div>Hello world!</div>
      <div>Hello world!</div>
      <div>Hello world!</div>
      <div>Hello world!</div>
    </Collapse>
  );
}

function Fancy() {
  const [show, setShow] = useState(false);
  const onClick = useCallback(() => { setShow(!show); }, [show]);

  return (
    <Collapse
      header={<button onClick={onClick}>click me</button>}
      show={show}
      style={{ width: '100%' }}
    >
      <div>Hello world!</div>
      <div>Hello world!</div>
      <div>Hello world!</div>
      <div>Hello world!</div>
      <div>Hello world!</div>
      <div>Hello world!</div>
    </Collapse>
  );
}

storiesOf('components|Accordion', module)
  .add('default', () => <Default />)
  .add('multiple', () => (
    <>
      <Fancy />
      <Fancy />
      <Fancy />
    </>
  ));
