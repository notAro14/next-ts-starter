// FUNCTIONS
import { styled } from "src/ui-kit/stitches.config"

const Text = styled("p", {
  color: "$component-text-functional",
  fontFamily: "$component-text-default",
  variants: {
    error: {
      true: {
        color: "$component-text-error-default",
      },
    },
  },
})

export default Text
