import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';
import theme from '../../theme';

import Switch from '.';

describe('Switch', () => {
  it('rendered without error', () => {
    const onChange = vi.fn();
    render(
      <ThemeProvider theme={theme}>
        <div>
          <Switch name="test" value="1" checked onChange={onChange} />
          <Switch name="test" value="2" onChange={onChange} />
        </div>
      </ThemeProvider>
    );
  });
});
