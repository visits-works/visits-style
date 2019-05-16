import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';
import TextInput from '.';

storiesOf('forms|TextInput', module)
  .add('default', () => (
    <TextInput
      name="test1"
      value={text('value', 'test value')}
      placeholder={text('placeholder', 'placeholder...')}
      outline={boolean('outline', false)}
      disabled={boolean('disabled', false)}
    />
  ))
  .add('outline', () => (
    <div>
      <TextInput outline name="test1" value="test value" />
      <TextInput outline name="test1" placeholder="blah blah" />
    </div>
  ));

