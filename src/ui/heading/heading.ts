// FUNCTIONS
import { styled } from "src/ui/stitches.config"

const Heading = styled("h2", {
  "$$component-heading-color-primary": "$colors$semantic-text-hi-gray",
  "$$component-heading-color-secondary": "$colors$semantic-text-hi",
  "$$component-heading-font": "$fonts$semantic-secondary",
  lineHeight: "1",
  color: "$$component-heading-color-primary",
  fontFamily: "$$component-heading-font",
  variants: {
    vibrant: {
      true: {
        color: "$$component-heading-color-secondary",
      },
    },
  },
  defaultVariants: {
    vibrant: false,
  },
})

export default Heading
