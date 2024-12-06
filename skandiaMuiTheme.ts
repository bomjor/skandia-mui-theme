import { createTheme } from '@mui/material';

const palette = {
  primary: {
    main: '#004b4a',
  },

  secondary: {
    main: '#038069',
  },
};

export const skandiaMuiTheme = createTheme({
  palette,
  typography: {
    fontFamily: ['Skandia-sans', 'Arial', 'sans-serif'].join(','),
    h2: { fontSize: '2rem' },
    h3: { fontSize: '1.25rem' },
    button: { textTransform: 'none' },
  },
  components: {
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontWeight: 'bold',
          color: '#000',
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          '& svg': {
            height: '1.9rem',
            width: '1.9rem',
            borderWith: '2em',
          },
        },
      },
    },

    MuiInput: {
      styleOverrides: {
        root: {
          marginTop: '1rem',

          '& :hover': {
            backgroundColor: '#f5f6f7',
          },

          '&:hover:not(.Mui-disabled):before': {
            borderBottom: '1px solid #038069',
          },

          '& input': {
            padding: '12px 16px',
            borderBottom: '1px solid #696969',
            marginTop: '0.5rem',
          },
          '& textarea': {
            marginTop: '0.5rem',
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: { root: { fontSize: '1.4rem' } },
    },

    MuiStepLabel: {
      styleOverrides: {
        label: {
          fontSize: '1.05em',
        },
      },
    },
    MuiStepIcon: {
      styleOverrides: {
        root: {
          fontSize: '1.5em',
          //   color: '#fff', // Default color for inactive steps

          '&$active': {
            color: palette.secondary.main,
            borderColor: `${palette.secondary.main}`, // Border for inactive steps
            '& text': {
              fill: palette.secondary.main, // Text color for the step number
            },
          },
        },
      },
    },

    MuiTableCell: {
      styleOverrides: {
        head: {
          fontWeight: 'bold',
          fontSize: '1em',
        },
        body: {
          fontSize: '1em',
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        sizeLarge: {
          padding: '.6875em 1.5em',
        },
      },
    },
  },
});
