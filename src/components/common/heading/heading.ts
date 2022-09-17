import { styled, theme } from "src/styles/theme/stitches.config"

const Heading = styled("h1", {
  color: theme.colors["text-functional"],
  fontFamily: theme.fonts.sans,
  fontWeight: theme.fontWeights.medium,
  lineHeight: 1,
  variants: {
    variant: {
      h1: {
        fontSize: theme.fontSizes["2xl"],
      },
      h2: {
        fontSize: theme.fontSizes.xl,
      },
      h3: {
        fontSize: theme.fontSizes.lg,
      },
    },
    vibrant: {
      true: {
        color: theme.colors["text-vibrant"],
      },
    },
  },
})

export default Heading
