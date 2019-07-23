import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';
import Switch from '.';

storiesOf('forms|Switch', module)
  .add('default', () => (
    <Switch
      name="test1"
      value={1}
      showLabel={boolean('showLabel', false)}
      checked={boolean('checked', false)}
      disabled={boolean('disabled', false)}
      background={text('background', '')}
      anchorColor={text('anchorColor', '')}
      onLabel={text('onLabel', 'ON')}
      offLabel={text('offLabel', 'OFF')}
    />
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
