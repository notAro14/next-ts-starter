import { FC, ReactNode } from "react"
import { Provider } from "react-redux"
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from "@mantine/core"
import { useHotkeys, useLocalStorage } from "@mantine/hooks"

import { store } from "src/store"

interface Props {
  children: ReactNode
}
const Providers: FC<Props> = ({ children }) => {
  //const [colorScheme, setColorScheme] = useState<ColorScheme>("light")
  //const toggleColorScheme = (value?: ColorScheme) =>
  //  setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"))

  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  })

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"))

  useHotkeys([["mod+J", () => toggleColorScheme()]])

  return (
    <Provider store={store}>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          theme={{ colorScheme }}
          withGlobalStyles
          withNormalizeCSS
        >
          {children}
        </MantineProvider>
      </ColorSchemeProvider>
    </Provider>
  )
}

export default Providers
