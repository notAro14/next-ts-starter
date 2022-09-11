import { createStitches } from "@stitches/react"

import {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  radii,
  shadows,
  space,
} from "src/theme/tokens"
import { media } from "src/theme/breakpoints"

export const { styled, getCssText, theme, createTheme } = createStitches({
  theme: {
    colors,
    fonts,
    fontSizes,
    fontWeights,
    radii,
    space,
    shadows,
  },
  media,
})
