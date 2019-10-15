import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';
import theme from '../../theme';

import Radio from '.';

describe('Radio', () => {
  it('rendered without error', () => {
    const onChange = jest.fn();
    render(
      <ThemeProvider theme={theme}>
        <div>
          <Radio name="test" value="1" checked onChange={onChange} />
          <Radio name="test" value="2" onChange={onChange} />
        </div>
      </ThemeProvider>
    );
  });
});
