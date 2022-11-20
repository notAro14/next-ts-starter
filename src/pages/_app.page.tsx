import type { AppPropsWithLayout } from "src/types/next.type"

import "src/styles/reset.css"
import Providers from "src/context"
import RootLayout from "./layout"

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout =
    Component.getLayout ?? ((page) => <RootLayout>{page}</RootLayout>)

  return getLayout(
    <Providers>
      <Component {...pageProps} />
    </Providers>
  )
}
