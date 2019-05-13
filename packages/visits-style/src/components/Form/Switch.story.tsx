import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import Switch from './Switch';

storiesOf('forms|Switch', module)
  .add('default', () => (
    <div>
      <Switch name="test1" value={1}>value 1</Switch>
    </div>
  ));
