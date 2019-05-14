import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import Switch from './Switch';

storiesOf('forms|Switch', module)
  .add('default', () => (
    <div>
      <Switch name="test1" value={1} />
    </div>
  ))
  .add('label on', () => (
    <div>
      <Switch name="test1" value={1} showLabel />
    </div>
  ))
  .add('custom', () => (
    <div>
      <Switch
        name="test1"
        value={1}
        showLabel
        background="linear-gradient(19.76deg, #3DA3ED 18.61%, rgba(62, 69, 233, 0.8) 112.01%)"
      />
      <br />
      <Switch
        name="test2"
        value={1}
        showLabel
        anchorColor="red"
        background="linear-gradient(19.76deg, #3DA3ED 18.61%, rgba(62, 69, 233, 0.8) 112.01%)"
      />
    </div>
  ));
