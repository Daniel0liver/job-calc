import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.palette.primary.background};
  }

  body,
  button,
  input,  
  textarea {
    font: 600 18px Inter, sans-serif;
  }
`;
