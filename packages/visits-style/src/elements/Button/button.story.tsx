import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text, boolean } from '@storybook/addon-knobs';
import Button from '.';
import ButtonGroup from './ButtonGroup';

const colorList = [
  '',
  'primary',
  'info',
  'link',
  'success',
  'warning',
  'danger',
  'dark',
];

const sizeList = [
  '',
  'small',
  'medium',
  'large',
];

storiesOf('elements|Button', module)
  .add('default', () => (
    <Button
      color={select('color', colorList, '')}
      size={select('size', sizeList, '')}
      outline={boolean('outline', false)}
      disabled={boolean('disabled', false)}
    >
      {text('children', 'Hello World')}
    </Button>
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

