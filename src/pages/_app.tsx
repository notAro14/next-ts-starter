// PACKAGES
import { QueryClient, QueryClientProvider } from "react-query"
import { useState } from "react"
import { ThemeProvider } from "next-themes"
// TYPES
import type { AppType } from "next/dist/shared/lib/utils"
import type { AppPropsWithLayout } from "src/types"
// FUNCTIONS
import { globalStyles, lightTheme, darkTheme } from "src/ui-kit/stitches.config"
import Layout from "src/shared/layout"

const MyApp = (({ Component, pageProps }: AppPropsWithLayout) => {
  // inject global reset style
  globalStyles()

  const getLayout =
    Component.getLayout ??
    ((page) => {
      return <Layout>{page}</Layout>
    })

  const [queryClient] = useState(() => new QueryClient())

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className,
      }}
    >
      <QueryClientProvider client={queryClient}>
        {getLayout(<Component {...pageProps} />)}
      </QueryClientProvider>
    </ThemeProvider>
  )
}) as AppType

export default MyApp
