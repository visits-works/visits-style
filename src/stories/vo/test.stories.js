import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

const info = withInfo()

storiesOf('Visits OB|Components/Welcome', module)
  .add('default(デフォルト)', info(() => (
    <div>Hello World!</div>
  )));
