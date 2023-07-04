/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Box, { Props } from '.';

const meta = {
  title: 'elements/Box',
  component: Box,
  tags: ['autodocs'],
} satisfies Meta<Props>;

export default meta;

type Story = StoryObj<typeof meta>;

export const base: Story = {
  args: {
    borderless: false,
    children: 'Hello wolrd',
  },
};
