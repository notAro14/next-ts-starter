import merge from 'lodash.merge';
import get from 'lodash.get';

export const getTheme = (theme, mode) =>
  merge({}, theme, {
    colors: get(theme.colors?.modes, mode, theme.colors),
  });
