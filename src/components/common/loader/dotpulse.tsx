import { styled, theme, keyframes } from "src/styles/theme/stitches.config"

const DOTPULSE_SIZE_KEY = "$$dot-pulse-size"
const DOTPULSE_SPEED_KEY = "$$dot-pulse-speed"
const DOT_SIZE_KEY = "$$dot-size"

const pulse = keyframes({
  "0%, 100%": {
    transform: "scale(0)",
  },
  "50%": {
    transform: "scale(1.5)",
  },
})

const StyledDot = styled("div", {})

const StyledDotPulse = styled("div", {
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  height: `calc(${DOTPULSE_SIZE_KEY} * 0.27)`,
  width: DOTPULSE_SIZE_KEY,

  [`& ${StyledDot}, &::before, &::after`]: {
    content: '""',
    display: "block",
    height: DOT_SIZE_KEY,
    width: DOT_SIZE_KEY,
    borderRadius: "50%",
    backgroundColor: theme.colors.solid,
    transform: "scale(0)",
  },

  "&::before": {
    animation: `${pulse} ${DOTPULSE_SPEED_KEY} ease-in-out infinite`,
  },
  [`& ${StyledDot}`]: {
    animation: `${pulse} ${DOTPULSE_SPEED_KEY} ease-in-out calc(${DOTPULSE_SPEED_KEY} * 0.125) infinite both`,
  },
  "&::after": {
    animation: `${pulse} ${DOTPULSE_SPEED_KEY} ease-in-out calc(${DOTPULSE_SPEED_KEY} * 0.25) infinite`,
  },

  variants: {
    size: {
      md: {
        [DOTPULSE_SIZE_KEY]: "40px",
        [DOT_SIZE_KEY]: `calc(${DOTPULSE_SIZE_KEY} * 0.18)`,
      },
    },
    speed: {
      normal: {
        [DOTPULSE_SPEED_KEY]: "1.3s",
      },
    },
  },
  defaultVariants: {
    size: "md",
    speed: "normal",
  },
})

export const DotPulse = () => (
  <StyledDotPulse>
    <StyledDot />
  </StyledDotPulse>
)
