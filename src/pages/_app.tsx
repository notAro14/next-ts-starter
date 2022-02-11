import '../styles/reset.css';
import '../styles/font.css';
import type { AppProps } from 'next/app';
import toast from 'react-hot-toast';
import { useCallback, useEffect, useState } from 'react';
import { ThemeProvider } from '@emotion/react';
import { QueryCache, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import ToggleThemeProvider from '../theme/switch-theme';

import defaultTheme from '../theme/default';
import lightTheme from '../theme/light';

const ALL_THEME = {
  default: defaultTheme,
  light: lightTheme,
};

type ThemeKey = keyof typeof ALL_THEME;

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        queryCache: new QueryCache({
          onError: (e) => {
            console.error(e);
            toast.error('Oops, something went wrong');
          },
        }),
      })
  );

  const [themeKey, setThemeKey] = useState<ThemeKey>('default');
  useEffect(() => {
    const initial = localStorage.getItem('theme') as
      | ThemeKey
      | null
      | undefined;
    if (!initial) return;
    if (Object.keys(ALL_THEME).includes(initial)) setThemeKey(initial);
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeKey((prev) => {
      switch (prev) {
        case 'default': {
          localStorage.setItem('theme', 'light');
          return 'light';
        }
        case 'light': {
          localStorage.setItem('theme', 'default');
          return 'default';
        }
        default:
          return 'default';
      }
    });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ToggleThemeProvider toggleTheme={toggleTheme}>
        <ThemeProvider theme={ALL_THEME[themeKey]}>
          <Component {...pageProps} />
        </ThemeProvider>
      </ToggleThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default MyApp;
