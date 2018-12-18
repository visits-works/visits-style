import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '.';
import ButtonGroup from './ButtonGroup';

storiesOf('elements|Button', module)
  .add('default', () => (
    <Button>Hello world</Button>
  ))
  .add('multiple buttons', () => (
    <div>
      <Button>button 1</Button>
      <Button>ボタン 2</Button>
      <Button>BUTTON 3</Button>
    </div>
  ))
  .add('ButtonGroup', () => (
    <ButtonGroup>
      <Button>button 1</Button>
      <Button>ボタン 2</Button>
      <Button>BUTTON 3</Button>
    </ButtonGroup>
  ));

