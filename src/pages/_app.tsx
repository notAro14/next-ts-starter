// PACKAGES
import { withTRPC } from "@trpc/next"
import superjson from "superjson"
// TYPES
import type { AppType } from "next/dist/shared/lib/utils"
import type { AppPropsWithLayout } from "src/types"
import type { AppRouter } from "src/server/server"
// CSS
import "src/styles/reset.css"
// COMPONENTS
import * as Layout from "src/shared/layouts"

const MyApp = (({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout =
    Component.getLayout ??
    ((page) => {
      return <Layout.Global>{page}</Layout.Global>
    })

  return getLayout(<Component {...pageProps} />)
}) as AppType

export default withTRPC<AppRouter>({
  config() {
    const url = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}/api/trpc`
      : "http://localhost:4000/api/trpc"

    return {
      url,
      transformer: superjson,
    }
  },
  ssr: true,
})(MyApp)
