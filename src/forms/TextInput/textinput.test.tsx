import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';
import theme from '../../theme';

import TextInput, { Props } from '.';

import Icon from '../../elements/Icons/Approved';

describe('TextInput', () => {
  it('rendered without error', () => {
    renderInput({});
  });

  it('outline', () => {
    renderInput({ outline: true });
  });

  it('help message', () => {
    renderInput({ help: 'help message' });
    screen.getByText('help message');
  });

  it('error message', () => {
    renderInput({ error: 'error message' });
    screen.getByText('error message');
  });

  it('icons', () => {
    renderInput({ rightIcon: <Icon data-testid="right-icon" />, leftIcon: <Icon data-testid="left-icon" /> });
    screen.getByTestId('right-icon');
    screen.getByTestId('left-icon');
  });
});

function renderInput(props: Props) {
  render(
    <ThemeProvider theme={theme}>
      <TextInput {...props} />
    </ThemeProvider>
  );
}
