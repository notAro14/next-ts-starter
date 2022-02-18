export const colors = {
  background: '#ffe',
  primary: 'dodgerblue',
  text: '#333',
  modes: {
    black: {
      background: 'black',
      text: '#ffe',
    },
    light: {
      background: '#ffe',
      text: '#333',
    },
    dark: {
      background: '#333',
      text: '#ffe',
    },
  },
};

export const colorModes = Object.keys(colors.modes);

const fonts = {
  primary: '"Lato", serif',
  src: 'https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap',
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

const radii = {
  sm: '2px',
  md: '6px',
  lg: '12px',
};

const space = [
  0, 4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192, 256, 384, 512, 640, 768,
];

export const theme = {
  colors,
  fonts,
  radii,
  fontSizes,
  space,
};
