/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';
import Divider from '.';

storiesOf('elements/Divider', module)
  .add('default', () => (
    <div style={{ width: '300px' }}>
      Content
      <Divider />
      content 2
    </div>
  ));

