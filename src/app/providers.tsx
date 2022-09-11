import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { FC, ReactNode, useState } from "react"
import { ThemeProvider } from "next-themes"

import { THEMES } from "src/theme"

interface Props {
  children: ReactNode
}
const Providers: FC<Props> = ({ children }) => {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <ThemeProvider attribute="class" defaultTheme="system" value={THEMES}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ThemeProvider>
  )
}

export default Providers
