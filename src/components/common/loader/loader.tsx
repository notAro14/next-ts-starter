import { DotPulse, Ping, DotSpinner } from "@uiball/loaders"
import { FC, useEffect, useState } from "react"

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

export const LazyLoader: FC<
  Props & {
    show: boolean
    delay?: number
  }
> = (props) => {
  const { show, delay = 400 } = props
  const [showLoader, setShowLoader] = useState(false)
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>
    if (show === false) {
      setShowLoader(false)
      return
    }
    if (delay === 0) {
      setShowLoader(true)
    } else {
      timeout = setTimeout(() => setShowLoader(true), delay)
    }
    return () => {
      clearTimeout(timeout)
    }
  }, [show, delay])

  return showLoader ? <Loader {...props} /> : null
}

export default Loader
