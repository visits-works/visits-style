import React from 'react';
import { storiesOf } from '@storybook/react';
import Box from '.';

storiesOf('elements|Box', module)
  .add('default', () => (
    <Box>Hello world</Box>
  ));

