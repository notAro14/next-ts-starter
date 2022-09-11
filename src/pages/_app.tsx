import "src/styles/reset.css"
import "src/styles/fonts.css"

import type { AppPropsWithLayout } from "src/types"

import Layout from "src/common/layout"
import Providers from "src/app/providers"

const getPublicLayout = (page: JSX.Element) => <Layout>{page}</Layout>

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? getPublicLayout

  return <Providers>{getLayout(<Component {...pageProps} />)}</Providers>
}

export default MyApp
