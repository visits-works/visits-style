import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select, text } from '@storybook/addon-knobs';
import Tag from '.';

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

storiesOf('elements|Tag', module)
  .add('default', () => (
    <Tag
      color={select('color', colorList, '')}
      round={boolean('round', false)}
    >
      {text('children', 'Hello World!')}
    </Tag>
  ));
