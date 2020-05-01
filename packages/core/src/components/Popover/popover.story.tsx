/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { select, boolean, text, object } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Popover from '.';
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

storiesOf('components|Popover', module)
  .add('default', () => (
    <>
      <div style={{ width: '50px', height: '80vh' }} />
      <Popover
        label={<button type="button">show</button>}
        // @ts-ignore
        position={select('position', positionList, 'bottom-end')}
        onOpen={action('onOpen')}
        onClose={action('onClose')}
        offset={object('offset', { x: 0, y: 6 })}
        disabled={boolean('disabled', false)}
      >
        <button type="button" onClick={() => { alert('world!'); }}>hello</button>
        <p>{text('children', 'hello world')}</p>
      </Popover>
      <div style={{ width: '50px', height: '80vh' }} />
    </>
  ))
  .add('with input', () => (
    <Test />
  ))
  .add('with absolute parent', () => (
    <div style={{ maxHeight: '80vh', overflowY: 'auto' }}>
      <Test2 />
      <Test2 />
      <Test2 />
      <Test2 />
      <Test2 />
      <Test2 />
    </div>
  ));

function Test() {
  const [txt, setText] = useState('');
  const onChange = (e) => setText(e.target.value);
  return (
    <Popover
      label={<button type="button">show</button>}
    >
      <TextInput value={txt} onChange={onChange} />
    </Popover>
  );
}

function Test2() {
  const [show, setShow] = useState(false);
  return (
    <div
      onPointerOver={() => setShow(true)}
      onPointerLeave={() => setShow(false)}
      style={{ position: 'relative', width: '40vw', height: '20vh', background: '#eee', marginBottom: 3 }}
    >
      {show && (
        <div style={{ position: 'absolute', right: 4, top: 0, transform: 'translateY(100%)', zIndex: 10 }}>
          <Popover
            label={<button type="button">button!</button>}
            // @ts-ignore
            position={select('position', positionList, 'bottom-end')}
          >
            hello world!
          </Popover>
        </div>
      )}
    </div>
  );
}
