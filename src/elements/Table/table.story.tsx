/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Table, { Props } from '.';

const sizeList = [
  '',
  'small',
  'medium',
  'large',
];

const meta = {
  title: 'elements/Table',
  component: Table,
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    control: {
      size: sizeList,
    },
  },
} satisfies Meta<Props>;

export default meta;

type Story = StoryObj<typeof meta>;

export const base: Story = {
  render: (args) => (
    <Table {...args}>
      <thead>
        <tr>
          <th>head 1</th>
          <th>head 2</th>
          <th>head 3</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>val1</td>
          <td>val2</td>
          <td>val3</td>
        </tr>
        <tr>
          <td>val1</td>
          <td>val2</td>
          <td>val3</td>
        </tr>
        <tr>
          <td>val1</td>
          <td>val2</td>
          <td>val3</td>
        </tr>
      </tbody>
    </Table>
  ),
};
