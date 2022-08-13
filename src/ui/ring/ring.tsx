import { FC } from "react"
import type * as Stitches from "@stitches/react"

import { styled, keyframes } from "src/ui/stitches.config"

const rotate = keyframes({
  "100%": {
    transform: "rotate(360deg)",
  },
})

const stretch = keyframes({
  "0%": {
    strokeDasharray: "1, 200",
    strokeDashoffset: 0,
  },
  "50%": {
    strokeDasharray: "90, 200",
    strokeDashoffset: "-35px",
  },
  "100%": {
    strokeDashoffset: "-124px",
  },
})

const StyledRing = styled("svg", {
  "$$ring-color": "$colors$semantic-solid",
  "$$ring-speed": "2s",

  strokeWidth: 5,
  verticalAlign: "middle",
  transformOrigin: "center",
  animation: `${rotate} $$ring-speed linear infinite`,

  circle: {
    fill: "none",
    stroke: "$$ring-color",
    strokeDasharray: "1, 200",
    strokeDashoffset: 0,
    strokeLinecap: "round",
    animation: `${stretch} calc($$ring-speed * 0.75) ease-in-out infinite`,
  },

  variants: {
    size: {
      sm: {
        height: 15,
        width: 15,
      },
      md: {
        height: 35,
        width: 35,
      },
      lg: {
        height: 50,
        width: 50,
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
})

type RingVariants = Stitches.VariantProps<typeof StyledRing>

const Ring: FC<RingVariants> = ({ size }) => (
  <StyledRing role="progressbar" viewBox="25 25 50 50" size={size}>
    <circle cx={50} cy={50} r={20} />
  </StyledRing>
)

export default Ring
