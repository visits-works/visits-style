import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs/react';
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
    <Popover label="show" position={select('position', positionList, 'bottom-right')}>
      <a onClick={() => { alert('world!') }}>hello</a>
      <p>blah blah iaweuhfauwehguiawehgawueghawegauweghuaiweg</p>
    </Popover>
  ));

