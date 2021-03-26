import 'styled-components';

interface IPaletteCommon {
  black: string;
  white: string;
  red: string;
  redlow: string;
  green: string;
  greenlow: string;
}

interface IPalette {
  main: string;
  background: string;
  contrastText: string;
  surface: string;
  text: {
    h1: string;
    h2: string;
    p: string;
  };
}

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      common: IPaletteCommon;
      primary: IPalette;
      secondary: IPalette;
    };
  }
}
