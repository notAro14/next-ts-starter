import type { AppProps } from "next/app";
import { Provider } from "react-redux";

import "src/adapters/primary/react/styles/reset.css";

import RootLayout from "src/adapters/primary/react/components/RootLayout";
import { store } from "src/adapters/config/store";

export default function App(props: AppProps) {
  const { pageProps, Component } = props;
  return (
    <Provider store={store}>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </Provider>
  );
}
