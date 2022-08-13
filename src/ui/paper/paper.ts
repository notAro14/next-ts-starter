import { styled, keyframes } from "src/ui/stitches.config"
import Box from "src/ui/box"

const glow = keyframes({
  "0%, 100%": { opacity: 1 },
  "50%": { opacity: 0.5 },
})

const Paper = styled(Box, {
  backgroundColor: "$semantic-ui-bg",
  padding: "$md",
  variants: {
    elevation: {
      low: {
        boxShadow: "$low",
        //transition: "box-shadow 300ms cubic-bezier(0, 0, 0.2, 1) 0s",
        //willChange: "box-shadow",
        //"&:hover": {
        //  boxShadow: "$medium",
        //},
      },
      medium: {
        boxShadow: "$medium",
        //transition: "box-shadow 300ms cubic-bezier(0, 0, 0.2, 1) 0s",
        //willChange: "box-shadow",
        //"&:hover": {
        //  boxShadow: "$high",
        //},
      },
      high: {
        boxShadow: "$high",
      },
    },
    loading: {
      true: {
        animation: `${glow} 1.5s ease-in-out infinite`,
      },
    },
  },
  defaultVariants: {
    elevation: "low",
    loading: false,
  },
})

export default Paper
