import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';
import theme from '../../theme';

import Select from '.';

describe('Select', () => {
  it('rendered without error', () => {
    const onChange = jest.fn();
    render(
      <ThemeProvider theme={theme}>
        <Select
          name="test"
          value="1"
          placeholder="placeholder"
          onChange={onChange}
          options={[
            { id: '1', name: 'value 1' },
            { id: '2', name: 'value 2' },
          ]}
        />
      </ThemeProvider>
    );
  });
});
