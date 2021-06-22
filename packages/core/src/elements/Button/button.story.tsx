/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text, boolean } from '@storybook/addon-knobs';
import Button from '.';
import Approved from '../Icons/Approved';
import ButtonGroup from './ButtonGroup';
import { SizeType } from '../../types';

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

storiesOf('elements/Button', module)
  .add('default', () => (
    <Button
      color={select('color', colorList, '')}
      size={select('size', sizeList, '') as SizeType}
      outline={boolean('outline', false)}
      disabled={boolean('disabled', false)}
      round={boolean('round', false)}
      icon={boolean('icon', false)}
    >
      {text('children', 'Hello World')}
    </Button>
  ))
  .add('icon', () => (
    <Button
      color={select('color', colorList, '')}
      size={select('size', sizeList, '') as SizeType}
      outline={boolean('outline', false)}
      disabled={boolean('disabled', false)}
      round={boolean('round', false)}
      icon={boolean('icon', false)}
    >
      <Approved />
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
