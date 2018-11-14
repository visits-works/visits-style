import React from 'react';
import { storiesOf } from '@storybook/react';
import Hero from '.';

storiesOf('components|Hero', module)
  .add('default', () => (
    <Hero>Hello world</Hero>
  ));

