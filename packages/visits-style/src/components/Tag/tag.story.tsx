import React from 'react';
import { storiesOf } from '@storybook/react';
import Tag from '.';

storiesOf('elements|Tag', module)
  .add('default', () => (
    <Tag>Hello world</Tag>
  ));

