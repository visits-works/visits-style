/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Divider from '.';

const meta = {
  title: 'elements/Divider',
  component: Divider,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Divider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const base: Story = {
  render: () => (
    <div style={{ width: '300px' }}>
      Content
      <Divider />
      content 2
    </div>
  ),
};
