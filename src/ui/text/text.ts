import { styled, theme } from "src/theme/stitches.config"

const Text = styled("p", {
  color: theme.colors["text-functional"],
  fontFamily: theme.fonts.sans,
  fontWeight: theme.fontWeights["extra-light"],
  variants: {
    lineHeight: {
      xxs: {
        lineHeight: 1,
      },
    },
  },
})

export default Text
