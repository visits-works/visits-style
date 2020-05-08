/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import Collapse from '.';

function Fancy({ length = 6, defaultShow = false }: any) {
  const [show, setShow] = useState(defaultShow);
  const onClick = () => setShow((s) => !s);
  return (
    <Collapse
      header={<button type="button" onClick={onClick}>click me</button>}
      show={show}
      style={{ width: '100%' }}
    >
      {Array.from({ length })
        // eslint-disable-next-line react/no-array-index-key
        .map((_, i) => <div key={i}>Hello world!</div>)}
    </Collapse>
  );
}

storiesOf('components|Accordion', module)
  .add('default', () => <Fancy />)
  .add('multiple', () => (
    <>
      <Fancy />
      <Fancy length={20} />
      <Fancy length={4} />
    </>
  ))
  .add('show true initial', () => (
    <Fancy length={15} defaultShow />
  ));
