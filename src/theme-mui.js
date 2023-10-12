import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fff',
    },
    secondary: {
      main: '#f0be14',
    },
    text: {
      primary: '#333333',
      secondary: '#cccccc',
    },
    background: {
      default: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'Averta, sans-serif',
    h1: {
      fontFamily: 'NoeDisplay, sans-serif',
    },
  },
});

export default theme;