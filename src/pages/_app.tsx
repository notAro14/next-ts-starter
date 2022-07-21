// PACKAGES
import { QueryClient, QueryClientProvider } from "react-query"
import { useState } from "react"
// TYPES
import type { AppType } from "next/dist/shared/lib/utils"
import type { AppPropsWithLayout } from "src/types"
// FUNCTIONS
import { globalStyles } from "src/ui-kit/stitches.config"

const MyApp = (({ Component, pageProps }: AppPropsWithLayout) => {
  // inject global reset style
  globalStyles()

  const getLayout =
    Component.getLayout ??
    ((page) => {
      return <>{page}</>
    })

  const [queryClient] = useState(() => new QueryClient())

  return getLayout(
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}) as AppType

export default MyApp
