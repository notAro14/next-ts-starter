// TYPES
import type { AppPropsWithLayout } from "src/types"
// CSS
import "src/styles/reset.css"
// COMPONENTS
import * as Layout from "src/shared/layouts"

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout =
    Component.getLayout ??
    ((page) => {
      return <Layout.Global>{page}</Layout.Global>
    })

  return getLayout(<Component {...pageProps} />)
}
