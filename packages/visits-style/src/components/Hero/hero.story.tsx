import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select, boolean } from '@storybook/addon-knobs';
import Hero from '.';

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
  'full',
];

storiesOf('components|Hero', module)
  .add('default', () => (
    <Hero
      color={select('color', colorList, '')}
      // @ts-ignore
      size={select('size', sizeList, 'small')}
      center={boolean('center', false)}
    >
      {text('children', 'Hello World')}
    </Hero>
  ));

