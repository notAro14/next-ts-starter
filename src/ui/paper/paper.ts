import { styled } from "src/ui/stitches.config"
import Box from "src/ui/box"

const Paper = styled(Box, {
  backgroundColor: "$semantic-ui-bg",
  borderRadius: "$lg",
  padding: "$md",
  variants: {
    elevation: {
      low: {
        boxShadow: "$low",
        transition: "box-shadow 300ms cubic-bezier(0, 0, 0.2, 1) 0s",
        willChange: "box-shadow",
        "&:hover": {
          boxShadow: "$medium",
        },
      },
      medium: {
        boxShadow: "$medium",
        transition: "box-shadow 300ms cubic-bezier(0, 0, 0.2, 1) 0s",
        willChange: "box-shadow",
        "&:hover": {
          boxShadow: "$high",
        },
      },
      high: {
        boxShadow: "$high",
      },
    },
  },
  defaultVariants: {
    elevation: "low",
  },
})

export default Paper
