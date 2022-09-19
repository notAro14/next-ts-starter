import { whiteA } from "@radix-ui/colors"
import { createTheme } from "src/styles/theme/stitches.config"
import { lightColors, darkColors } from "src/styles/theme/tokens/colors"

const lightTheme = createTheme("light", {
  colors: { ...lightColors, bg: whiteA.whiteA1 },
})

const darkTheme = createTheme("dark", {
  colors: darkColors,
})

export const THEMES = {
  light: lightTheme.className,
  dark: darkTheme.className,
}
