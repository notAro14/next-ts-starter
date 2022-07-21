import { styled } from "src/ui-kit/stitches.config"
import Box from "../box"

const Flex = styled(Box, {
  display: "flex",
  variants: {
    direction: {
      column: {
        flexDirection: "column",
      },
      row: {
        flexDirection: "row",
      },
    },
    gap: {
      "1": {
        gap: "$xxs",
      },
      "2": {
        gap: "$xs",
      },
      "3": {
        gap: "$sm",
      },
      "4": {
        gap: "$base",
      },
      "5": {
        gap: "$lg",
      },
      "6": {
        gap: "$xl",
      },
      "7": {
        gap: "$2xl",
      },
    },
  },
  defaultVariants: {
    gap: 1,
  },
})

export default Flex
