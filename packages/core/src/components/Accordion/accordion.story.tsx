/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import Collapse from '.';

function Fancy() {
  const [show, setShow] = useState(false);
  const onClick = () => setShow((s) => !s);
  return (
    <Collapse
      header={<button type="button" onClick={onClick}>click me</button>}
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
  .add('default', () => <Fancy />)
  .add('multiple', () => (
    <>
      <Fancy />
      <Fancy />
      <Fancy />
    </>
  ));
