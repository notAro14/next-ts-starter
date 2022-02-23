import {
  theme as blue,
  colorModeReducer as blueColorModeReducer,
} from './blue';

const allThemes = {
  blue: {
    reducer: blueColorModeReducer,
    theme: blue,
  },
} as const;

export default allThemes;
