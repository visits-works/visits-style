/* eslint-disable import/no-extraneous-dependencies *//* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Placeholder from '.';

const meta = {
  title: 'elements/Placeholder',
  component: Placeholder,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Placeholder>;

export default meta;

type Story = StoryObj<typeof meta>;

export const base: Story = {
  render: () => (
    <>
      <Placeholder />
      <br />
      <Placeholder />
      <br />
      <Placeholder />
      <br />
      <Placeholder />
      <br />
      <Placeholder />
    </>
  ),
};
