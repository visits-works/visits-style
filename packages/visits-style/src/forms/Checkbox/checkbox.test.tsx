import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';
import theme from '../../theme';

import Checkbox from '.';

describe('Checkbox', () => {
  it('rendered without error', () => {
    const onChange = jest.fn();
    render(
      <ThemeProvider theme={theme}>
        <div>
          <Checkbox name="test1" checked onChange={onChange} />
          <Checkbox name="test2" onChange={onChange} />
        </div>
      </ThemeProvider>
    );
  });
});
