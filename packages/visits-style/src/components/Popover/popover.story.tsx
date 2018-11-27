import React from 'react';
import { storiesOf } from '@storybook/react';
import Popover from '.';

storiesOf('components|Popover', module)
  .add('default', () => (
    <Popover label="show">
      <a onClick={() => { alert('world!') }}>hello</a>
      <p>blah blah</p>
    </Popover>
  ));

