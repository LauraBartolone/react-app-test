import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fff',
    },
    secondary: {
      main: '#f0be14',
    },
    input: {
      main: '#64b4fa'
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
  components: {
    
    MuiToggleButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          color: '#333333',
          backgroundColor: '#f9f9f9',
          textTransform: 'none',
          fontSize: '1rem',
          "&.Mui-selected": {
            color: "#fff",
            backgroundColor: '#64b4fa',
            boxShadow: '0px 4px 4px #64b4fa6a'
          },
          "&:hover": {
            color: "#fff",
            backgroundColor: '#64b4fa',
            boxShadow: '0px 4px 4px #64b4fa6a'

          }
        }
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: "#64b4fa",
          color: "#fff",
        }
      }
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          borderRadius: 0,

        }
      }
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffffd4',

        }
      }
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          '&$checked': {
            color: "#64b4fa",

          }
        }
      }
    },
  },
});

export default theme;