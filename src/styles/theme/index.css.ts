import { createTheme } from "@vanilla-extract/css"

import { colors } from "./colors"
import { colors as darkColors } from "./dark-colors"
import { fonts } from "./fonts"
import { fontSizes } from "./font-sizes"
import { fontWeights } from "./font-weigths"
import { space } from "./space"

const NEXT_STARTER_THEME_ID = "NEXT_STARTER_THEME_ID"

const common = {
  fonts,
  fontSizes,
  fontWeights,
  space,
}

export const [lightThemeClass, vars] = createTheme(
  {
    colors,
    ...common,
  },
  NEXT_STARTER_THEME_ID
)

export const darkThemeClass = createTheme(
  vars,
  {
    colors: darkColors,
    ...common,
  },
  NEXT_STARTER_THEME_ID
)
