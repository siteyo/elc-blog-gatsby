import { createTheme, responsiveFontSizes } from '@material-ui/core';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2d3142',
    },
    secondary: {
      main: '#BFC0C0',
    },
  },
  typography: {
    fontSize: 14,
  },
});

export default responsiveFontSizes(theme, {
  breakpoints: ['sm', 'lg'],
});