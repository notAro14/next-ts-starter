import { createTheme } from "src/styles/theme/stitches.config"
import { lightColors, darkColors } from "src/styles/theme/tokens/colors"

const lightTheme = createTheme("light", {
  colors: lightColors,
})

const darkTheme = createTheme("dark", {
  colors: darkColors,
})

export const THEMES = {
  light: lightTheme.className,
  dark: darkTheme.className,
}
