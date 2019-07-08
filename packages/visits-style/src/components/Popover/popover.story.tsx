import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Popover from '.';

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
        label="show"
        // @ts-ignore
        position={select('position', positionList, 'bottom-right')}
        onOpen={action('onOpen')}
        onClose={action('onClose')}
        disabled={boolean('disabled', false)}
      >
        <a onClick={() => { alert('world!') }}>hello</a>
        <p>blah blah iaweuhfauwehguiawehgawueghawegauweghuaiweg</p>
      </Popover>
      <div style={{ width: '50px', height: '80vh' }} />
    </>
  ));

