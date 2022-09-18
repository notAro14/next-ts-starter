import type { FC } from "react"
import { styled } from "@nextui-org/react"

const SVG = styled("svg", {
  width: "1em",
  height: "1em",
  stroke: "currentColor",
  fill: "none",
  strokeWidth: 1.5,
})

const HiHome: FC = () => {
  return (
    <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
      />
    </SVG>
  )
}

export default HiHome
