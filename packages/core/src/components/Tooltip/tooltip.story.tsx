/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';
import Tooltip from '.';

const positionList = [
  'top',
  'left',
  'right',
  'bottom',
  'top-left',
  'top-right',
  'bottom-left',
  'bottom-right',
];


storiesOf('components|Tooltip', module)
  .add('default', () => (
    <Tooltip
      label="Hello!!!"
      // @ts-ignore
      position={select('position', positionList, 'bottom')}
    >
      Hello world
    </Tooltip>
  ));
