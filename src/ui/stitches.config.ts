import { createStitches } from "@stitches/react"
import {
  colors,
  fonts,
  fontSizes,
  space,
  radii,
  shadows,
} from "./theme/default"

export const { styled, getCssText, globalCss, createTheme } = createStitches({
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

export const injectGlobalStyles = globalCss({
  "*, *::after, *::before": {
    boxSizing: "border-box",
    margin: 0,
    padding: 0,
  },
  "html, body, #__next": {
    height: "100%",
  },
  "#__next": {
    isolation: "isolate",
  },
  body: {
    lineHeight: "1.5",
    "-webkit-font-smoothing": "antialiased",
  },
  "img, picture, video, canvas, svg": {
    display: "block",
    maxWidth: "100%",
  },
  "input, button, textarea, select": {
    font: "inherit",
  },
  "p, h1, h2, h3, h4, h5, h6": {
    overflowWrap: "break-word",
  },
})