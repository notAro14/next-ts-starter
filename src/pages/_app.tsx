import type { AppProps } from "next/app";
import { Provider } from "react-redux";

import "src/adapters/primary/react/styles/reset.css";

import { configureAppStore } from "src/core/store/configureAppStore";
import { InMemoryUserGateway } from "src/adapters/secondary/gateways/inMemoryUserGateway";

import RootLayout from "src/adapters/primary/react/components/RootLayout";

const userGateway = new InMemoryUserGateway();
userGateway.init = [
  { id: "UUID-JOHN", name: "John Doe", email: "john.doe@email.com" },
];
const store = configureAppStore({ userGateway });

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
