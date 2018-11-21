import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import TextInput from './TextInput';

storiesOf('forms|TextInput', module)
  .add('default', () => (
    <div>
      <TextInput name="test1" value="test value" />
      <TextInput name="test1" placeholder="blah blah" />
    </div>
  ))
  .add('outline', () => (
    <div>
      <TextInput outline name="test1" value="test value" />
      <TextInput outline name="test1" placeholder="blah blah" />
    </div>
  ));

