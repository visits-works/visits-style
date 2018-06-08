import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import publicTheme from '../../theme/public';
import { findColorInvert } from '../../utils';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 85vw;
`;

const Item = styled.div`
  width: 150px;
  height: 150px;
  background: ${({ color }) => color};
  color: ${({ color }) => findColorInvert(color)};
  font-weight: 600;

  padding: 8px;
  word-wrap: break-word;
  text-align: right;
`;

storiesOf('ideagram|Core', module)
  .add('public theme palette', () => (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
      <Wrapper>
        {Object.keys(publicTheme).map(key => (
          <Item color={publicTheme[key]}>
            <span>
              {key}<br />
              {publicTheme[key]}
            </span>
          </Item>
        ))}
      </Wrapper>
    </div>
  ))