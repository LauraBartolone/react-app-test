import { createTheme } from '@mui/material/styles';
import { sortedLastIndex } from 'lodash';

const theme = createTheme({
  palette: {
    primary: {
      main: '#f9f9f9',
      contrastText: '#333333',
    },
    secondary: {
      main: '#f0be14',
      contrastText: '#fff',
    },
    tertiary: {
      main: '#333333',
      contrastText: '#fff',
      dark: '#cccccc',

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
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          fontWeight: 600,
          
          "&.MuiButton-outlinedTertiary": {
            color: "#333",
            backgroundColor: '#f9f9f9',
            textTransform: 'initial',
            borderColor: '#cccccc'
          },
        }
      }
    },
    
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
          borderColor: '#cccccc',

        }
      }
    },
    DatePicker: {
      styleOverrides: {
        root: {
          borderRadius: 0,

        }
      }
    },
    MuiOutlinedInput: {
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
    MuiSlider: {
      styleOverrides: {
        root: {
          '& .MuiSlider-rail': {
            opacity: 1,
            backgroundColor: '#f9f9f9',
            border: '1px solid #ccccca3d', 
          },
          '& .MuiSlider-valueLabel': {
            fontSize: 16,
            fontWeight: 'normal',
            bottom: 0,
            top: 52,
            backgroundColor: 'unset',
            color: 'red',
            '&:before': {
              display: 'none',
            },
            '& *': {
              background: 'transparent',
              color: '#333333',
            },
          },
          '& .MuiSlider-thumb': {
            height: 28,
            width: 28,
            backgroundColor: '#f9f9f9',
            '&:focus, &:hover, &.Mui-active': {
              boxShadow:
                '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
              // Reset on touch devices, it doesn't add specificity
              '@media (hover: none)': {
              },
            },
          }
        }
      }
    },
  },
});

export default theme;