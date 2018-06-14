import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme/public';
import './styles/global';

export default function Wrapper({ children }) {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}

