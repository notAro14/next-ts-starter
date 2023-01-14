import type { AppProps } from "next/app";

import "src/adapters/primary/react/styles/reset.css";

import RootLayout from "src/adapters/primary/react/components/RootLayout";

export default function App(props: AppProps) {
  const { pageProps, Component } = props;
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}
