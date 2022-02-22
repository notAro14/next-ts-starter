import merge from 'lodash.merge';
import get from 'lodash.get';

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

export const getTheme = (theme: typeof blue, mode: string) =>
  merge({}, theme, {
    colors: get(theme.colors?.modes, mode, theme.colors),
  });

export default allThemes;
