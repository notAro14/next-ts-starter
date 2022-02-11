import type { Theme } from 'styled-system';

const space = [
  0, 4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192, 256, 384, 512, 640, 768,
];

const colors = {
  primary: 'yellowgreen',
  accent: 'dodgerblue',
  background: 'white',
  text: 'black',
};

const fontSizes = {
  xxs: '0.512rem',
  xs: '0.64rem',
  sm: '0.8rem',
  md: '1rem',
  lg: '1.25rem',
  xl: '1.563rem',
  '2xl': '1.953rem',
  '3xl': '2.441rem',
  '4xl': '3.052rem',
};

const buttons = {
  filled: {
    border: '1px solid',
  },
  outlined: {
    border: '1px solid',
    backgroundColor: 'transparent',
  },
};

const theme: Theme = {
  colors,
  fonts: {
    body: '"Poppins", sans-serif',
  },
  fontSizes,
  space,
  buttons,
};

export default theme;
