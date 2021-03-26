import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  palette: {
    common: {
      black: '#222831',
      white: '#ffffff',
      red: '#EB3B35',
      redlow: '#FAECEB',
      green: '#36B336',
      greenlow: '#E8F8E8',
    },
    primary: {
      main: '#41414C',
      background: '#F0F2F5',
      contrastText: '#ffffff',
      surface: '#FCFDFF',
      text: {
        h1: '#5A5A66',
        h2: '#787880',
        p: '#BFBFCC',
      },
    },
    secondary: {
      main: '#F1972C',
      background: '#F0F2F5',
      contrastText: '#ffffff',
      surface: '#FCFDFF',
      text: {
        h1: '#5A5A66',
        h2: '#787880',
        p: '#BFBFCC',
      },
    },
  },
};

export { theme };
