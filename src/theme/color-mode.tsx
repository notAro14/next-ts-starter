import {
  useContext,
  useReducer,
  createContext,
  FC,
  useCallback,
  useEffect,
} from 'react';

const ColorModeContext = createContext<string | null>(null);
const ToggleColorModeContext = createContext<(() => void) | null>(null);

//const colorModeMachine = {
//  initial: 'light',
//  states: {
//    light: {
//      on: {
//        TOGGLE: 'dark',
//      },
//    },
//    black: {
//      on: {
//        TOGGLE: 'light',
//      },
//    },
//    dark: {
//      on: {
//        TOGGLE: 'black',
//      },
//    },
//  },
//};

export type ColorModeAction<T> =
  | {
      type: 'TOGGLE';
    }
  | {
      type: 'SET';
      payload: T;
    };

export const useColorMode = () => {
  const colorModeContext = useContext(ColorModeContext);

  if (colorModeContext) return colorModeContext;

  throw new Error('useColorMode must be called inside ColorModeProvider');
};

export const useToggleColorMode = () => {
  const toggleColorModeContext = useContext(ToggleColorModeContext);

  if (toggleColorModeContext) return toggleColorModeContext;

  throw new Error(
    'useToggleColorMode must be called inside ToggleColorModeProvider'
  );
};

export const COLOR_MODE_KEY = 'next-ts-starter-color-mode';

function getUserPreferedColorMode<T>(fallback: T) {
  if (typeof window === 'undefined') return fallback;
  const userPreferedColorMode = localStorage.getItem(COLOR_MODE_KEY) as
    | T
    | null
    | undefined;
  return userPreferedColorMode || fallback;
}

export type ColorModeReducer<T> = (
  // eslint-disable-next-line no-unused-vars
  state: T,
  // eslint-disable-next-line no-unused-vars
  action: ColorModeAction<T>
) => T;

export function useColorModeParent<T>(
  colorModeReducer: ColorModeReducer<T>,
  init: T
): [T, () => void] {
  const [colorMode, dispatch] = useReducer(colorModeReducer, init);
  const toggle = useCallback(() => dispatch({ type: 'TOGGLE' }), []);

  useEffect(() => {
    dispatch({ type: 'SET', payload: getUserPreferedColorMode(init) });
  }, [init]);

  return [colorMode, toggle];
}

export interface ProviderProps {
  colorMode: string;
  toggle(): void;
}
export const ColorModeProvider: FC<Pick<ProviderProps, 'colorMode'>> = ({
  children,
  colorMode,
}) => {
  return (
    <ColorModeContext.Provider value={colorMode}>
      {children}
    </ColorModeContext.Provider>
  );
};

export const ToggleColorModeProvider: FC<Pick<ProviderProps, 'toggle'>> = ({
  children,
  toggle,
}) => {
  return (
    <ToggleColorModeContext.Provider value={toggle}>
      {children}
    </ToggleColorModeContext.Provider>
  );
};
