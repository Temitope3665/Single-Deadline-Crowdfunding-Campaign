import { extendTheme } from '@chakra-ui/react';

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

const theme = extendTheme({ colors, styles, fonts });

export default theme;