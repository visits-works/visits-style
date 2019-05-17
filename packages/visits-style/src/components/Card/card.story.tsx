import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, select } from '@storybook/addon-knobs';
import Card from '.';

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

storiesOf('components|Card', module)
  .add('default', () => (
    <Card
      color={select('color', colorList, '')}
      title={text('title', '')}
      image={text('image', '')}
      horizontal={boolean('horizontal', false)}
    >
      {text('children', 'Hello World')}
    </Card>
  ));

