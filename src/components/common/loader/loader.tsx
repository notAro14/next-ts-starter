import { DotPulse, Ping, DotSpinner } from "@uiball/loaders"
import { FC } from "react"

import { Color, theme } from "src/styles/theme/stitches.config"
import Box from "src/components/common/box"

interface Props {
  size?: number
  speed?: number
  type?: "dotpulse" | "ping" | "dotspinner"
  color?: Color
}
const Loader: FC<Props> = ({
  type = "dotpulse",
  size,
  speed,
  color: colorKey,
}) => {
  const { value: colorValue } = theme.colors[colorKey ?? "solid"]
  switch (type) {
    case "dotpulse":
      return (
        <Box role="progressbar">
          <DotPulse size={size ?? 40} speed={speed ?? 1.3} color={colorValue} />
        </Box>
      )
    case "dotspinner":
      return (
        <Box role="progressbar">
          <DotSpinner
            color={colorValue}
            size={size ?? 40}
            speed={speed ?? 0.9}
          />
        </Box>
      )
    case "ping":
      return (
        <Box role="progressbar">
          <Ping color={colorValue} size={size ?? 45} speed={speed ?? 2} />
        </Box>
      )
    default:
      throw new Error("Unknown loader type")
  }
}

export default Loader
