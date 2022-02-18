import {
  useContext,
  useReducer,
  createContext,
  FC,
  useCallback,
  useEffect,
} from 'react';

import type { ColorMode } from 'theme';

const ColorModeContext = createContext<ColorMode | null>(null);
const ToggleColorModeContext = createContext<(() => void) | null>(null);

export const colorModeMachine = {
  initial: 'light',
  states: {
    light: {
      on: {
        TOGGLE: 'dark' as Extract<ColorMode, 'dark'>,
      },
    },
    black: {
      on: {
        TOGGLE: 'light' as Extract<ColorMode, 'light'>,
      },
    },
    dark: {
      on: {
        TOGGLE: 'black' as Extract<ColorMode, 'black'>,
      },
    },
  },
};

export type ColorModeAction =
  | {
      type: 'TOGGLE';
    }
  | {
      type: 'SET';
      payload: ColorMode;
    };

export const colorModeReducer = (state: ColorMode, action: ColorModeAction) => {
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

export const useColorMode = (): [ColorMode, () => void] => {
  const colorModeContext = useContext(ColorModeContext);
  const toggleColorModeContext = useContext(ToggleColorModeContext);

  if (colorModeContext && toggleColorModeContext)
    return [colorModeContext, toggleColorModeContext];

  throw new Error('useColorMode must be called inside ColorModeProvider');
};

const COLOR_MODE_KEY = 'next-ts-starter-color-mode';

const getUserPreferedColorMode = (fallback: ColorMode) => {
  if (typeof window === 'undefined') return fallback;
  const userPreferedColorMode = localStorage.getItem(COLOR_MODE_KEY) as
    | ColorMode
    | null
    | undefined;
  return userPreferedColorMode || fallback;
};

export const useColorModeParent = (
  init: ColorMode
): [ColorMode, () => void] => {
  const [colorMode, dispatch] = useReducer(colorModeReducer, init);
  const toggle = useCallback(() => dispatch({ type: 'TOGGLE' }), []);

  useEffect(() => {
    dispatch({ type: 'SET', payload: getUserPreferedColorMode(init) });
  }, [init]);

  return [colorMode, toggle];
};

export interface ColorModeProviderProps {
  colorMode: ColorMode;
  toggle(): void;
}
export const ColorModeProvider: FC<ColorModeProviderProps> = ({
  children,
  colorMode,
  toggle,
}) => {
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ToggleColorModeContext.Provider value={toggle}>
        {children}
      </ToggleColorModeContext.Provider>
    </ColorModeContext.Provider>
  );
};
