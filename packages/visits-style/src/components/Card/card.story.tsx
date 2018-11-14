import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from '.';

storiesOf('components|Card', module)
  .add('default', () => (
    <Card style={{ background: '#fff' }}>Hello world</Card>
  ))

