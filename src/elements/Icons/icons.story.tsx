/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { styled } from 'styled-components';
import type { Meta, StoryObj } from '@storybook/react';
import * as Icons from '.';

const Wrapper = styled.ul`
  display: grid;
  gap: 0.85rem;
  grid-template-columns: repeat(4, 1fr);

  li {
    text-align: center;
    small {
      display: block;
      margin-top: 0.5em;
    }

    margin: 0.5rem;
  }
`;

const meta = {
  title: 'elements/Icons',
  component: Icons.IconApproved,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Icons.IconApproved>;

export default meta;

type Story = StoryObj<typeof meta>;

export const base: Story = {
  render: () => (
    <Wrapper>
      {Object.keys(Icons).map((name) => {
        // @ts-ignore
        const Icon = Icons[name];
        return (
          <li key={name}>
            <Icon width={24} height={24} />
            <small>{name}</small>
          </li>
        );
      })}
    </Wrapper>
  ),
};
