import React from 'react';
import { ThemeProvider } from 'styled-components';

import GridWrapper from './components/Grid';

import Routes from './routes';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GridWrapper>
        <GlobalStyle />
        <Routes />
      </GridWrapper>
    </ThemeProvider>
  );
}
