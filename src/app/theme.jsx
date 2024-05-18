'use client'
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      /* main: '#6A5E52', // Cambia el color principal (primary) */
      main: '#333333', // Cambia el color principal (primary)
    },
    secondary: {
      //main: '#BF905C', // Cambia el color secundario (secondary)
      /* main: '#D9AB73', */
      main: '#00DDFF'
    },
    error: {
      main: '#F23005', // Cambia el color de error
    },
    warning: {
      main: '#F2E205', // Cambia el color de advertencia
    },
    info: {
      main: '#F2E8B3', // Cambia el color de información
    },
    black: {
      main: '#000000', // Cambia el
    },
    white: {
      main: '#FFFFFF', // Cambia el
    },
  
    // Otros ajustes de paleta como background, text, etc.
  },
  // Otros ajustes de tema como typography, spacing, breakpoints, etc.
});

export default theme;
