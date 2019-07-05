import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, boolean } from '@storybook/addon-knobs';
import Tooltip from '.';

const positionList = [
  'top',
  'left',
  'right',
  'bottom',
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
