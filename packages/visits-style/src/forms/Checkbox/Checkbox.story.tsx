/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';
import Field from '../Field';
import Checkbox from '.';

storiesOf('forms|Checkbox', module)
  .add('default', () => (
    <Checkbox
      name="test1"
      value={1}
      checked={boolean('checked', false)}
      disabled={boolean('disabled', false)}
    >
      {text('children', 'hello world')}
    </Checkbox>
  ))
  .add('with Field', () => (
    <Field label="test-label" required>
      <Checkbox
        name="test1"
        value={1}
        disabled={boolean('disabled', false)}
      >
        {text('children', 'hello world')}
      </Checkbox>
    </Field>
  ));
