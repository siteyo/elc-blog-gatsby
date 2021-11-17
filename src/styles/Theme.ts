import { createTheme, responsiveFontSizes } from '@material-ui/core';

const baseTheme = createTheme({
  palette: {
    primary: {
      main: '#2d3142',
    },
    secondary: {
      main: '#BFC0C0',
    },
  },
  typography: {
    fontSize: 12,
    fontFamily: '"Noto Sans JP"',
  },
});

export const theme = responsiveFontSizes(baseTheme, {
  breakpoints: ['md', 'xl'],
});
