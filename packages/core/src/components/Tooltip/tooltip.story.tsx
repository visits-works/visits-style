/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, object } from '@storybook/addon-knobs';
import Tooltip from '.';

const positionList = [
  'auto',
  'top',
  'left',
  'right',
  'bottom',
  'top-start',
  'top-end',
  'bottom-start',
  'bottom-end',
];


storiesOf('components/Tooltip', module)
  .add('default', () => (
    <Tooltip
      label="Hello!!!"
      // @ts-ignore
      position={select('position', positionList, 'bottom')}
      offset={object('offset', { x: 0, y: 6 })}
    >
      <span>Hello world</span>
    </Tooltip>
  ));
