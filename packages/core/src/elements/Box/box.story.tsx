/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';
import Box from '.';

storiesOf('elements/Box', module)
  .add('default', () => (
    <Box
      borderless={boolean('borderless', false)}
    >
      {text('children', 'Hello World!')}
    </Box>
  ));
