import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '.';
import ButtonGroup from './ButtonGroup';

storiesOf('elements|Button', module)
  .add('default', () => (
    <Button>Hello world</Button>
  ))
  .add('ButtonGroup', () => (
    <ButtonGroup>
      <Button>button 1</Button>
      <Button>button 2</Button>
      <Button>button 3</Button>
    </ButtonGroup>
  ));

