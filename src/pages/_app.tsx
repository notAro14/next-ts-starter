// PACKAGES
import { QueryClient, QueryClientProvider } from "react-query"
import { useState } from "react"
// TYPES
import type { AppType } from "next/dist/shared/lib/utils"
import type { AppPropsWithLayout } from "src/types"
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

  const [queryClient] = useState(() => new QueryClient())

  return getLayout(
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}) as AppType

export default MyApp
