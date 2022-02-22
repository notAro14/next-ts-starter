import '../styles/reset.css';
import type { AppProps } from 'next/app';
import toast from 'react-hot-toast';
import { useState } from 'react';
import { QueryCache, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import ThemeProvider from 'theme/theme-provider';

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

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default MyApp;
