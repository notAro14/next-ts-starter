// FUNCTIONS
import { styled } from "src/ui/stitches.config"

const Text = styled("p", {
  "$$component-text-color-vibrant": "$colors$semantic-text-hi",
  "$$component-text-color-functional": "$colors$semantic-text-hi-gray",
  "$$component-text-font": "$fonts$semantic-primary",
  color: "$$component-text-color-functional",
  fontFamily: "$$component-text-font",
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
        "$$component-text-color-error": "$colors$semantic-text-lo-error",
        color: "$$component-text-color-error",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
})

export default Text
