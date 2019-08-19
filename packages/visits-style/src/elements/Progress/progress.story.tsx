/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import Progress from '.';

storiesOf('elements|Progress', module)
  .add('default', () => (
    <Progress value={20} max={100} />
  ));
