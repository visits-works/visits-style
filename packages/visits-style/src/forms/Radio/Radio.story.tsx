import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';
import Radio from '.';

storiesOf('forms|Radio', module)
  .add('default', () => (
    <Radio
      name="test1"
      value={1}
      checked={boolean('checked', false)}
      disabled={boolean('disabled', false)}
    >
      {text('children', 'hello world')}
    </Radio>
  ));
