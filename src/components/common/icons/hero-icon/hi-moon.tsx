import type { FC } from "react"
import { styled } from "@nextui-org/react"

const SVG = styled("svg", {
  width: "1em",
  height: "1em",
  stroke: "currentColor",
  fill: "none",
  strokeWidth: 1.5,
})
const HiMoon: FC = () => {
  return (
    <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
      />
    </SVG>
  )
}

export default HiMoon
