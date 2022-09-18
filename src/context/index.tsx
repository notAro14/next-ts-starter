import { FC, ReactNode } from "react"
import { ThemeProvider } from "next-themes"
import { Provider } from "react-redux"
import { NextUIProvider, createTheme } from "@nextui-org/react"

import { store } from "src/store"

const THEMES = {
  light: createTheme({
    type: "light",
  }),
  dark: createTheme({
    type: "dark",
  }),
}

interface Props {
  children: ReactNode
}
const Providers: FC<Props> = ({ children }) => {
  return (
    <Provider store={store}>
      <ThemeProvider attribute="class" defaultTheme="system" value={THEMES}>
        <NextUIProvider>{children}</NextUIProvider>
      </ThemeProvider>
    </Provider>
  )
}

export default Providers
