import { createStitches } from "@stitches/react"

import {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  radii,
  shadows,
  space,
} from "src/styles/theme/tokens"
import { media } from "src/styles/theme/breakpoints"

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
