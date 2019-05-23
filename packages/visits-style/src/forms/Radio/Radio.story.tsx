import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
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
  ))
  .add('multiple', () => (
    <div style={{ display: 'flex' }}>
      <Radio name="test1" value="1" checked onChange={action('onChange_1')}>Radio1</Radio>
      <Radio name="test1" value="2" onChange={action('onChange_2')}>Radio2</Radio>
      <Radio name="test1" value="3" onChange={action('onChange_3')}>Radio3</Radio>
    </div>
  ));
