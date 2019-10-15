import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';
import theme from '../../theme';

import ButtonGroup from './ButtonGroup';
import Button from '.';

describe('ButtonGroup', () => {
  it('rendered without error', () => {
    render(
      <ThemeProvider theme={theme}>
        <ButtonGroup>
          <Button>button1</Button>
          <Button>button2</Button>
          <Button>button3</Button>
        </ButtonGroup>
      </ThemeProvider>
    );
  });
});
