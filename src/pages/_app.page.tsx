import type { AppPropsWithLayout } from "src/types/next"

import { PublicLayout } from "src/layout/public.layout"
import Providers from "src/context"

const getPublicLayout = (page: JSX.Element) => (
  <PublicLayout>{page}</PublicLayout>
)

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? getPublicLayout

  return <Providers>{getLayout(<Component {...pageProps} />)}</Providers>
}

export default MyApp
