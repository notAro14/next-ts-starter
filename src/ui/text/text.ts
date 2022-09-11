import { styled, theme } from "src/theme/stitches.config"

const Text = styled("p", {
  color: theme.colors["text-functional"],
  fontFamily: theme.fonts.sans,
  fontWeight: theme.fontWeights["extra-light"],
  variants: {
    fontSize: {
      xxs: {
        fontSize: theme.fontSizes.xxs,
      },
      xs: {
        fontSize: theme.fontSizes.xs,
      },
      sm: {
        fontSize: theme.fontSizes.sm,
      },
      md: {
        fontSize: theme.fontSizes.md,
      },
      lg: {
        fontSize: theme.fontSizes.lg,
      },
      xl: {
        fontSize: theme.fontSizes.xl,
      },
      "2xl": {
        fontSize: theme.fontSizes["2xl"],
      },
      "3xl": {
        fontSize: theme.fontSizes["3xl"],
      },
      "4xl": {
        fontSize: theme.fontSizes["4xl"],
      },
    },
    lineHeight: {
      xxs: {
        lineHeight: 1,
      },
    },
  },
  defaultVariants: {
    fontSize: "md",
  },
})

export default Text
