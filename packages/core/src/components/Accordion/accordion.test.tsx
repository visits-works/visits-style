import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';
import theme from '../../theme';

import Accordion from '.';

describe('Accordion', () => {
  it('rendered without error', () => {
    render(
      <ThemeProvider theme={theme}>
        <Accordion
          header={<button role="button">click</button>}
          show
        >
          Accordion Content
        </Accordion>
      </ThemeProvider>
    );
  });
});
