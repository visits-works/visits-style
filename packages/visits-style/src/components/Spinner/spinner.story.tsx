import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text } from '@storybook/addon-knobs';
import Spinner from '.';

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

storiesOf('components|Spinner', module)
  .add('default', () => (
    <Spinner color={select('color', colorList, 'primary')} size={text('size', '5rem')} />
  ));
