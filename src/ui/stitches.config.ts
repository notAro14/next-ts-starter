import { createStitches } from "@stitches/react"
import {
  colors,
  fonts,
  fontSizes,
  space,
  radii,
  shadows,
} from "./theme/default"

export const { styled, getCssText, globalCss, createTheme, keyframes, css } =
  createStitches({
    theme: {
      colors,
      fonts,
      fontSizes,
      space,
      radii,
      shadows,
    },
    media: {
      sm: "(max-width: 640px)",
      md: "(min-width: 641px) and (max-width: 768px)",
      lg: "(min-width: 769px)",
    },
  })
