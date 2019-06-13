import React, { useState } from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import AppBar from './index';

const Add = styled(AppBar)`
  color: red;
`;

function Test() {
  const [color, setColor] = useState('dark');
  return (
    <Add color={color} brand="Hello">
      <ul>
        <li><a href="#">link1</a></li>
        <li><a href="#">link2</a></li>
        <li><a href="#">link3</a></li>
      </ul>
      <div>
        <a>abc</a>
      </div>
    </Add>
  );
}

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
  ))
  .add('test', () => (
    <Test />
  ))
  .add('without children', () => (
    <AppBar color="light" brand="Hello" />
  ))

