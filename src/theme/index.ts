import merge from 'lodash.merge';
import get from 'lodash.get';
import { createContext } from 'react';

import { theme as blue } from './blue';

export const ColorModeContext = createContext<(() => void) | null>(null);

const allThemes = {
  blue,
} as const;

export type ColorMode = keyof typeof allThemes.blue.colors.modes;

export const getTheme = (theme: typeof blue, mode: ColorMode) =>
  merge({}, theme, {
    colors: get(theme.colors.modes, mode, theme.colors),
  });

export default allThemes;
