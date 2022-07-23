import { createStitches } from "@stitches/react"
import {
  plum,
  tomato,
  whiteA,
  mauve,
  plumDark,
  tomatoDark,
  mauveDark,
} from "@radix-ui/colors"

export const { styled, getCssText, globalCss, createTheme } = createStitches({
  theme: {
    colors: {
      ...plum,
      ...tomato,
      ...whiteA,
      ...mauve,
      "semantic-bg": "$plum1",
      "semantic-bg-subtle": "$plum2",
      "semantic-ui-bg": "$plum3",
      "semantic-ui-bg-hovered": "$plum4",
      "semantic-ui-bg-selected": "$plum5",
      "semantic-line": "$plum6",
      "semantic-ui-border": "$plum7",
      "semantic-ui-border-hovered": "$plum8",
      "semantic-solid": "$plum9",
      "semantic-solid-hovered": "$plum10",
      "semantic-text-lo": "$plum11",
      "semantic-text-hi": "$plum12",
      "semantic-text-lo-gray": "$mauve11",
      "semantic-text-hi-gray": "$mauve12",

      "semantic-text-lo-error": "$tomato11",
      "semantic-text-disabled": "$mauve8",
    },
    fonts: {
      "core-mono": "monospace",
      "core-sans": "sans-serif",
      "core-serif": "serif",
      "core-cursive": "cursive",

      "semantic-primary": "$core-sans",
      "semantic-secondary": "$core-mono",
    },
    fontSizes: {
      sm: "clamp(0.8rem, 0.17vw + 0.76rem, 0.89rem)",
      md: "clamp(1rem, 0.34vw + 0.91rem, 1.19rem)",
      lg: "clamp(1.25rem, 0.61vw + 1.1rem, 1.58rem)",
      xl: "clamp(1.56rem, 1vw + 1.31rem, 2.11rem)",
      "2xl": "clamp(1.95rem, 1.56vw + 1.56rem, 2.81rem)",
      "3xl": "clamp(2.44rem, 2.38vw + 1.85rem, 3.75rem)",
      "4xl": "clamp(3.05rem, 3.54vw + 2.17rem, 5rem)",
    },
    space: {
      xxs: "4px",
      xs: "8px",
      sm: "12px",
      md: "16px",
      lg: "24px",
      xl: "32px",
      "2xl": "48px",
      "3xl": "64px",
      "4xl": "96px",
      "5xl": "128px",
      "6xl": "192px",
      "7xl": "256px",
      "8xl": "384px",
      "9xl": "512px",
      "10xl": "640px",
      "11xl": "768px",
    },
    radii: {
      big: "9999px",
    },
  },
})

export const lightTheme = createTheme("light-theme")
export const darkTheme = createTheme("dark-theme", {
  colors: {
    ...plumDark,
    ...tomatoDark,
    ...mauveDark,
  },
})

export const globalStyles = globalCss({
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
