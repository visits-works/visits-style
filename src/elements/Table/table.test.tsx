import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';
import theme from '../../theme';

import Table from '.';

describe('Table', () => {
  it('rendered without error', () => {
    render(
      <ThemeProvider theme={theme}>
        <Table>
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
          </tbody>
        </Table>
      </ThemeProvider>
    );
  });
});
