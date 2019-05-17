import React from 'react';
import { css } from 'styled-components';
import { storiesOf } from '@storybook/react';
import Progress from '.';

const custom = css`
  & > div[role=""] {
    border-radius: 24566px;
  }

  &:after {
    position: absolute;
    content: "";
    border-radius: 24566px;
    height: 0.5rem;
    background-color: red;
    top: 0.25rem;
    left: 0;
    right: 0;
  }
`;

storiesOf('elements|Progress', module)
  .add('default', () => (
    <Progress value={20} max={100} />
  ))
  .add('custom', () => (
    <Progress value={20} max={100} css={custom} />
  ))

