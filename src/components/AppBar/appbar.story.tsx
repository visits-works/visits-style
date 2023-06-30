/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import AppBar from '.';

const meta = {
  title: 'components/AppBar',
  component: AppBar,
  tags: ['autodocs'],
  render: (args) => (
    <AppBar {...args}>
      <ul>
        <li><a href="#">link1</a></li>
        <li><a href="#">link2</a></li>
        <li><a href="#">link3</a></li>
      </ul>
      <div>
        <a>abc</a>
      </div>
    </AppBar>
  ),
  argTypes: {},
} satisfies Meta<typeof AppBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const withoutChildren: Story = {
  args: {
    color: 'light',
    brand: 'Hello!',
  },
};
