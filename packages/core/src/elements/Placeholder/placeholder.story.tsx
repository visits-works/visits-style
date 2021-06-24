/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import Placeholder from '.';

storiesOf('elements/Placeholder', module)
  .add('default', () => (
    <>
      <Placeholder />
      <br />
      <Placeholder />
      <br />
      <Placeholder />
      <br />
      <Placeholder />
      <br />
      <Placeholder />
    </>
  ));
