import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select } from '@storybook/addon-knobs';
import Table from '.';

const sizeList = [
  '',
  'small',
  'medium',
  'large',
];

storiesOf('elements|Table', module)
  .add('default', () => (
    <Table
      size={select('size', sizeList, '')}
      full={boolean('full', false)}
      bordered={boolean('bordered', false)}
      striped={boolean('striped', false)}
      hover={boolean('hover', false)}
    >
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
  ))

