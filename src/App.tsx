import React from 'react';
import { ThemeProvider } from 'styled-components';

import Routes from './routes';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  );
}
