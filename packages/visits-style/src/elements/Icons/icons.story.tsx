/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import * as Icons from '.';

const Wrapper = styled.ul`
  li {
    text-align: center;
    small {
      display: block;
    }

    margin: 0.5rem;
  }
`;

storiesOf('elements|Icons', module)
  .add('default', () => (
    <Wrapper>
      {Object.keys(Icons).map((name) => {
        const Icon = Icons[name];
        return (
          <li key={name}>
            <Icon />
            <small>{name}</small>
          </li>
        );
      })}
    </Wrapper>
  ));
