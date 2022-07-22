// PACKAGES
import { QueryClient, QueryClientProvider } from "react-query"
import { useState } from "react"
import { ThemeProvider } from "next-themes"
// TYPES
import type { AppType } from "next/dist/shared/lib/utils"
import type { AppPropsWithLayout } from "src/types"
// FUNCTIONS
import { globalStyles, lightTheme, darkTheme } from "src/ui-kit/stitches.config"

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
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        value={{
          light: lightTheme.className,
          dark: darkTheme.className,
        }}
      >
        <Component {...pageProps} />
      </ThemeProvider>
    </QueryClientProvider>
  )
}) as AppType

export default MyApp
