import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { select, boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Popover from '.';
import TextInput from '../../forms/TextInput';

const positionList = [
  'top',
  'top-left',
  'top-right',
  'bottom',
  'bottom-left',
  'bottom-right',
];

storiesOf('components|Popover', module)
  .add('default', () => (
    <>
      <div style={{ width: '50px', height: '80vh' }} />
      <Popover
        label={<button>show</button>}
        // @ts-ignore
        position={select('position', positionList, 'bottom-right')}
        onOpen={action('onOpen')}
        onClose={action('onClose')}
        disabled={boolean('disabled', false)}
      >
        <a onClick={() => { alert('world!') }}>hello</a>
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
    const [text, setText] = useState('');
    const onChange = (e) => setText(e.target.value);
    return (
      <Popover
        label={<button>show</button>}
      >
        <TextInput value={text} onChange={onChange} />
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
          <div style={{ position: 'absolute', right: 12, bottom: 0, transform: 'translateY(100%)', zIndex: 10 }}>
            <Popover
              label={<button>button!</button>}
              // @ts-ignore
              position={select('position', positionList, 'bottom-right')}
            >
              hello world!
            </Popover>
          </div>
        )}
      </div>
    );
  }

