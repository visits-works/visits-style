import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import Radio from './Radio';

storiesOf('forms|Radio', module)
  .add('default', () => (
    <div>
      <Radio name="test1" value={1} >value 1</Radio>
      <Radio name="test1" value={2} checked >value 2</Radio>
      <Radio name="test2" value={3} disabled >value 3</Radio>
      <Radio name="test2" value={4} checked disabled >value 4</Radio>
    </div>
  ))
  .add('button label', () => (
    <div>
      <Radio button name="test1" value={1} >value 1</Radio>
      <Radio button name="test1" value={2} checked >value 2</Radio>
      <Radio button name="test2" value={3} disabled >value 3</Radio>
      <Radio button name="test2" value={4} checked disabled >value 4</Radio>
    </div>
  ));

