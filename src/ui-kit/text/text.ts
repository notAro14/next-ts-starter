// FUNCTIONS
import { styled } from "src/ui-kit/stitches.config"

const Text = styled("p", {
  color: "$component-text-functional",
  fontFamily: "$component-text-default",
  variants: {
    size: {
      sm: {
        fontSize: "$sm",
      },
      md: {
        fontSize: "$md",
      },
      lg: {
        fontSize: "$lg",
      },
      xl: {
        fontSize: "$xl",
      },
      "2xl": {
        fontSize: "$2xl",
      },
      "3xl": {
        fontSize: "$3xl",
      },
      "4xl": {
        fontSize: "$4xl",
      },
    },
    error: {
      true: {
        color: "$component-text-error-default",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
})

export default Text
