import { FC, ReactNode } from "react"
import { ThemeProvider } from "next-themes"
import { Provider } from "react-redux"

import { THEMES } from "src/theme"
import { store } from "./store"

interface Props {
  children: ReactNode
}
const Providers: FC<Props> = ({ children }) => {
  return (
    <Provider store={store}>
      <ThemeProvider attribute="class" defaultTheme="system" value={THEMES}>
        {children}
      </ThemeProvider>
    </Provider>
  )
}

export default Providers
