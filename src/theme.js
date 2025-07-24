import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#7C86BD', // Purple/blue color for buttons
      light: '#8D96C9',
      dark: '#6C76AD',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#E2A37F', // Peach/orange color for accents
      light: '#F0B28E',
      dark: '#D2936F',
    },
    background: {
      default: '#F3F2E8', // Light beige background
      paper: '#FFFFFF', // White for cards
      light: '#F9F8F3', // Lighter beige for feature cards
    },
    text: {
      primary: '#3E1A01', // Dark brown text
      secondary: 'rgba(62, 26, 1, 0.7)', // Semi-transparent brown
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '3.5rem',
      lineHeight: 1.2,
    },
    h2: {
      fontWeight: 600,
      fontSize: '2.5rem',
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.8rem',
    },
    h4: {
      fontWeight: 600,
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 30,
          padding: '12px 24px',
        },
        outlined: {
          borderColor: '#7C86BD',
          color: '#7C86BD',
          borderWidth: '1px',
          '&:hover': {
            borderWidth: '1px',
          }
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          boxShadow: 'none',
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#F3F2E8',
          color: '#3E1A01',
        },
      },
    },
  },
});

export default theme; 