import { createContext, FC, useContext } from 'react';

type ToggleTheme = () => void;

const ToggleThemeContext = createContext<ToggleTheme | null | undefined>(null);

interface ToggleThemeProviderProps {
  toggleTheme: ToggleTheme;
}

const ToggleThemeProvider: FC<ToggleThemeProviderProps> = ({
  children,
  toggleTheme,
}) => {
  return (
    <ToggleThemeContext.Provider value={toggleTheme}>
      {children}
    </ToggleThemeContext.Provider>
  );
};

export const useToggleTheme = () => {
  const context = useContext(ToggleThemeContext);
  if (!context) {
    throw new Error('useToggleTheme must be used inside ToggleThemeProvider');
  }
  return context;
};

export default ToggleThemeProvider;
