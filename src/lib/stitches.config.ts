import { createStitches } from "@stitches/react"
import { blueDark, red, blackA, whiteA } from "@radix-ui/colors"

export const { styled, getCssText } = createStitches({
  theme: {
    colors: {
      ...blueDark,
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
    space: {
      "xxs": "4px",
      "xs": "8px",
      "sm": "12px",
      "base": "16px",
      "lg": "24px",
      "xl": "32px",
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
  },
  utils: {
    // abbreviated margin
    m: (value: string | number) => ({
      margin: value,
    }),
    mt: (value: string | number) => ({
      marginTop: value,
    }),
    mr: (value: string | number) => ({
      marginRight: value,
    }),
    mb: (value: string | number) => ({
      marginBottom: value,
    }),
    ml: (value: string | number) => ({
      marginLeft: value,
    }),
    mx: (value: string | number) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: string | number) => ({
      marginTop: value,
      marginBottom: value,
    }),
    // abbreviated padding
    p: (value: string | number) => ({
      padding: value,
    }),
    pt: (value: string | number) => ({
      paddingTop: value,
    }),
    pr: (value: string | number) => ({
      paddingRight: value,
    }),
    pb: (value: string | number) => ({
      paddingBottom: value,
    }),
    pl: (value: string | number) => ({
      paddingLeft: value,
    }),
    px: (value: string | number) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: string | number) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  },
})
