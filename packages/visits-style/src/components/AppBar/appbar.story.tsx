import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import AppBar from './index';

storiesOf('components|AppBar', module)
  .add('default', () => (
    <AppBar color="light" brand="Hello">
      <ul>
        <li><a href="#">link1</a></li>
        <li><a href="#">link2</a></li>
        <li><a href="#">link3</a></li>
      </ul>
      <div>
        <a>abc</a>
      </div>
    </AppBar>
  ));

