import React from 'react';
import { storiesOf } from '@storybook/react';
import Radio from '.';

storiesOf('forms|Radio', module)
  .add('default', () => (
    <div>
      <Radio name="test1" value={1}>value 1</Radio>
      <Radio name="test1" value={2} checked>value 2</Radio>
      <Radio name="test2" value={3} disabled>value 3</Radio>
      <Radio name="test2" value={4} checked disabled>value 4</Radio>
    </div>
  ));
