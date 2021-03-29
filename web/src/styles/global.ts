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

  html, body, #root {
    min-height: 100%;
  }

  button, a {
    cursor: pointer;
  }

  button:hover { 
    cursor: pointer;
  }

  button:focus, input:focus{
    outline: none;
  }

  input {
    border-style: hidden;
  }

  body,
  button,
  input,  
  textarea {
    font: 600 18px Inter, sans-serif;
  }
`;
