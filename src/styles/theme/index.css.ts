import { createTheme } from "@vanilla-extract/css"

import { colors } from "./colors"
import { fonts } from "./fonts"
import { fontSizes } from "./font-sizes"
import { fontWeights } from "./font-weigths"
import { space } from "./space"

const NEXT_STARTER_THEME_ID = "NEXT_STARTER_THEME_ID"

export const [themeClass, vars] = createTheme(
  {
    colors,
    fonts,
    fontSizes,
    fontWeights,
    space,
  },
  NEXT_STARTER_THEME_ID
)
