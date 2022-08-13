import { FC } from "react"
import type { VariantProps } from "@stitches/react"

import { styled, keyframes } from "src/ui/stitches.config"

const wobble = keyframes({
  "0%, 100%": {
    transform: "translateX(0)",
  },
  "50%": {
    transform: "translateX(calc($$momentum-size * 0.2)) scale(1.1)",
  },
})
const wobble2 = keyframes({
  "0%, 100%": {
    transform: "translateX(0)",
  },
  "50%": {
    transform: "translateX(calc($$momentum-size * -0.2)) scale(1.1)",
  },
})
const rotate = keyframes({
  "0%": {
    transform: "rotate(0deg)",
  },
  "100%": {
    transform: "rotate(360deg)",
  },
})

const momentumSizeKey = "$$momentum-size"
const momentumColorKey = "$$momentum-color"
const momentumSpeedKey = "$$momentum-speed"

const StyledMomentum = styled("div", {
  [momentumColorKey]: "$colors$semantic-solid",
  [momentumSpeedKey]: "1.1s",

  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: momentumSizeKey,
  width: momentumSizeKey,
  animation: `${rotate} ${momentumSpeedKey} linear infinite`,

  "&::before, &::after": {
    content: '""',
    height: "25%",
    width: "25%",
    borderRadius: "50%",
    backgroundColor: momentumColorKey,
  },
  "&::before": {
    animation: `${wobble2} calc(${momentumSpeedKey} * 1.25) ease-in-out infinite`,
    marginRight: "10%",
  },
  "&::after": {
    animation: `${wobble} calc(${momentumSpeedKey} * 1.25) ease-in-out infinite`,
  },

  variants: {
    size: {
      sm: {
        [momentumSizeKey]: "15px",
      },
      md: {
        [momentumSizeKey]: "35px",
      },
      lg: {
        [momentumSizeKey]: "50px",
      },
    },
  },
  defaultVariants: {
    size: "sm",
  },
})

const Momentum: FC<VariantProps<typeof StyledMomentum>> = ({ size }) => {
  return <StyledMomentum role="progressbar" size={size} />
}

export default Momentum
