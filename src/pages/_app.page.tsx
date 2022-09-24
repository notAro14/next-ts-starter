import "src/styles/reset.css"
import "src/styles/fonts.css"

import type { AppPropsWithLayout } from "src/types/next"
import { SessionProvider } from "next-auth/react"

import { PublicLayout } from "src/layout/public.layout"
import Providers from "src/context"
import { Session } from "next-auth"

const getPublicLayout = (page: JSX.Element) => (
  <PublicLayout>{page}</PublicLayout>
)

const MyApp = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout<{ session: Session }>) => {
  const getLayout = Component.getLayout ?? getPublicLayout
  return (
    <SessionProvider session={session}>
      <Providers>{getLayout(<Component {...pageProps} />)}</Providers>
    </SessionProvider>
  )
}

export default MyApp
