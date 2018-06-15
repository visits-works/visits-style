/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import publicTheme from '../../src/theme/public';
import { findColorInvert } from '../../src/utils';
import { Container } from '../../src/components';

const Item = styled.div`
  display: inline-block;
  width: 150px;
  height: 150px;
  background: ${({ color }) => color};
  color: ${({ color }) => findColorInvert(color)};
  font-weight: 600;

  padding: 8px;
  word-wrap: break-word;
  text-align: right;
`;

storiesOf('Components|Core', module)
  .add('public theme palette', () => (
    <Container>
      {Object.keys(publicTheme).map(key => (
        <Item color={publicTheme[key]}>
          <span>
            {key}<br />
            {publicTheme[key]}
          </span>
        </Item>
      ))}
    </Container>
  ));
