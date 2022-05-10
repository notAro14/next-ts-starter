import { createStitches } from "@stitches/react"
import { blue, red, blackA, whiteA } from "@radix-ui/colors"

export const { styled, getCssText } = createStitches({
  theme: {
    colors: {
      ...blue,
      ...red,
      ...blackA,
      ...whiteA,
      "bg-app": "$blue1",
      "bg-subtle": "$blue2",
      "bg-ui": "$blue3",
      "bg-ui-hovered": "$blue4",
      "bg-ui-selected": "$blue5",
      "borders-subtle": "$blue6",
      "borders": "$blue7",
      "borders-hovered": "$blue8",
      "solid": "$blue9",
      "solid-hovered": "$blue10",
      "lo-text": "$blue11",
      "hi-text": "$blue12",
      "overlay": "$blackA9",
    },
    fonts: {
      main: "sans-serif",
    },
    fontSizes: {
      "sm": "clamp(0.8rem, 0.17vw + 0.76rem, 0.89rem)",
      "base": "clamp(1rem, 0.34vw + 0.91rem, 1.19rem)",
      "md": "clamp(1.25rem, 0.61vw + 1.1rem, 1.58rem)",
      "lg": "clamp(1.56rem, 1vw + 1.31rem, 2.11rem)",
      "xl": "clamp(1.95rem, 1.56vw + 1.56rem, 2.81rem)",
      "2xl": "clamp(2.44rem, 2.38vw + 1.85rem, 3.75rem)",
      "3xl": "clamp(3.05rem, 3.54vw + 2.17rem, 5rem)",
    },
  },
})
