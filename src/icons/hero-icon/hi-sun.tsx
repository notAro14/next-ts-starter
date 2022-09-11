import type { FC } from "react"
import { styled } from "src/theme/stitches.config"

const SVG = styled("svg", {
  width: "1em",
  height: "1em",
  stroke: "currentColor",
  fill: "none",
  strokeWidth: 1.5,
})
const HiSun: FC = () => {
  return (
    <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
      />
    </SVG>
  )
}

export default HiSun
