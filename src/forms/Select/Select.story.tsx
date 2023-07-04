/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Select, { Props } from '.';

const options = [
  { id: 1, name: 'options1' },
  { id: 2, name: 'options2' },
];

const meta = {
  title: 'forms/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    options: { controls: false },
  },
} satisfies Meta<Props>;

export default meta;

type Story = StoryObj<typeof meta>;

export const base: Story = {
  args: {
    options,
    placeholder: 'Select!!12312iuehwfaiuewhfguiahwegivwegiuvhawiuoegoauwegouawegnoawegnvaowegnaug',
  },
};
