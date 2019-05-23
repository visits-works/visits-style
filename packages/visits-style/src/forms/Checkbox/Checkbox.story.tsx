import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';
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
  ));
