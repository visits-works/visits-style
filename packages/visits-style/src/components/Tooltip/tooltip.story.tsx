import React from 'react';
import { storiesOf } from '@storybook/react';
import Tooltip from '.';

storiesOf('components|Tooltip', module)
  .add('default', () => (
    <Tooltip label="Hello!!!">Hello world</Tooltip>
  ));
