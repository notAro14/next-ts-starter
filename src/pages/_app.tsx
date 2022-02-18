import '../styles/reset.css';
import type { AppProps } from 'next/app';
import toast from 'react-hot-toast';
import { useState } from 'react';
import { ThemeProvider, Global, css } from '@emotion/react';
import { QueryCache, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import allThemes, { getTheme } from 'theme';
import {
  ColorModeProvider,
  useColorModeParent,
} from 'theme/use-color-mode.hook';

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

  const [colorMode, toggle] = useColorModeParent('light');
  const theme = getTheme(blueTheme, colorMode);

  return (
    <QueryClientProvider client={queryClient}>
      <ColorModeProvider colorMode={colorMode} toggle={toggle}>
        <ThemeProvider theme={theme}>
          <Global
            styles={css`
              @import url('${theme.fonts.src}');
            `}
          />
          <Component {...pageProps} />
        </ThemeProvider>
      </ColorModeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default MyApp;
