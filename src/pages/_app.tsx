import '../styles/reset.css';
import type { AppProps } from 'next/app';
import toast from 'react-hot-toast';
import { useState, useCallback } from 'react';
import { ThemeProvider } from '@emotion/react';
import { QueryCache, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import allThemes, { getTheme, ColorModeContext } from 'theme';
import type { ColorMode } from 'theme';
import Font from 'shared/font';

const blueTheme = allThemes.blue;

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

  const [colorMode, setColorMode] = useState<ColorMode>('light');
  const theme = getTheme(blueTheme, colorMode);
  const switchColorMode = useCallback(() => {
    setColorMode((prev) => {
      switch (prev) {
        case 'dark':
          return 'light';
        case 'light':
          return 'dark';
        default:
          return 'light';
      }
    });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ColorModeContext.Provider value={switchColorMode}>
        <ThemeProvider theme={theme}>
          <Font href={theme.fonts.src} />
          <Component {...pageProps} />
        </ThemeProvider>
      </ColorModeContext.Provider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default MyApp;
