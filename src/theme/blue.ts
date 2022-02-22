import { ColorModeReducer, COLOR_MODE_KEY } from './color-mode';

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

export type ColorMode = keyof typeof colors.modes;

export const colorModeReducer: ColorModeReducer<ColorMode> = (
  state,
  action
) => {
  //return colorModeMachine.states[state].on[action.type] || state;
  switch (action.type) {
    case 'TOGGLE': {
      switch (state) {
        case 'light': {
          const next = 'dark';
          localStorage.setItem(COLOR_MODE_KEY, next);
          return next;
        }
        case 'dark': {
          const next = 'black';
          localStorage.setItem(COLOR_MODE_KEY, next);
          return next;
        }
        case 'black': {
          const next = 'light';
          localStorage.setItem(COLOR_MODE_KEY, next);
          return next;
        }
        default:
          return state;
      }
    }
    case 'SET': {
      const next = action.payload;
      localStorage.setItem(COLOR_MODE_KEY, next);
      return next;
    }
  }
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
