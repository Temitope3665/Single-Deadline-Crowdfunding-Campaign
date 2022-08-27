import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const breakpoints = createBreakpoints({
  sm: '320px',
  md: '768px',
  lg: '1024px',
  xl: '1200px',
  xxl: '1441px',
});

const colors = {
    brand: {
      primary: '#23D186',
      white: '#FFFFFF',
      dark: '#4E4B4B',
    },
  }

  const fonts = {
    heading: `'Koho', Raleway`,
    body: `'Koho', Raleway`,
  }

  const styles = {
      body: {
        fontFamily: "'Koho', cursive",
      },
      '::placeholder': {
        color: '#BABABA',
      },
  };

const theme = extendTheme({ colors, styles, fonts, breakpoints });

export default theme;