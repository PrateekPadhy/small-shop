import { Color, createTheme, PaletteOptions } from '@mui/material';

type ColorWithoutShades = Omit<Color, 'A100' | 'A200' | 'A400' | 'A700'>;

const primary: ColorWithoutShades = {
  50: '#f4e8e7', // brown-50 - same as primary.light
  100: '#f2c9be', // brown-100
  200: '#eaa695', // brown-200
  300: '#e3856c', // brown-300
  400: '#df6c4f', // brown-400 - same as primary.main
  500: '#db5535', // brown-500
  600: '#d14f31', // brown-600
  700: '#c4492d', // brown-700
  800: '#b54429', // brown-800
  900: '#9d3821', // brown-900 - same as primary.dark
};

const secondary: ColorWithoutShades = {
  50: '#e1f5f3', // teal-50 - same as primary.light
  100: '#b3e6e0', // teal-100
  200: '#81d6cc', // teal-200
  300: '#49c5b7', // teal-300 - same as primary.main
  400: '#0db7a6', // teal-400
  500: '#00a995', // teal-500
  600: '#009b87', // teal-600
  700: '#008a77', // teal-700
  800: '#007a68', // teal-800
  900: '#005d4a', // teal-900 - same as primary.dark
};

const palette: PaletteOptions = {
  primary: {
    light: primary[50], // violet-50
    main: primary[400], // violet-500
    dark: primary[900], // violet-900
  },
  secondary: {
    light: secondary[50], // red-50
    main: secondary[300], // red-500
    dark: secondary[900], // red-900
  },
};

export const appTheme = createTheme({
  palette,
  typography: {
    fontFamily: [
      'Calibri',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(', '),
    fontWeightRegular: 500,
    h1: {
      fontSize: '32px',
      lineHeight: '40px',
      fontWeight: 'bold',
      fontStyle: 'normal',
    },
    h2: {
      fontSize: '28px',
      lineHeight: '32px',
      fontWeight: 'bold',
    },
    h3: {
      fontSize: '24px',
      lineHeight: '32px',
      fontWeight: 'bold',
    },
    h4: {
      fontSize: '20px',
      lineHeight: '28px',
      fontWeight: 'bold',
      fontStyle: 'normal',
    },
    h5: {
      fontSize: '18px',
      lineHeight: '24px',
      fontWeight: 'bold',
    },
    h6: {
      fontSize: '16px',
      lineHeight: '24px',
      fontWeight: 'bold',
    },
  },
});
