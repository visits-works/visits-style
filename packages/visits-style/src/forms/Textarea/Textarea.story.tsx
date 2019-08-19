/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';
import Textarea from '.';

storiesOf('forms|Textarea', module)
  .add('default', () => (
    <Textarea
      name="test1"
      value={text('value', 'hello world')}
      error={text('error', '')}
      help={text('help', '')}
      disabled={boolean('disabled', false)}
    />
  ));
