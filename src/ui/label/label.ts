import { styled } from "src/ui/stitches.config"

const Label = styled("label", {
  "$$component-label-color": "$colors$semantic-text-lo-gray",
  "$$component-label-font": "$fonts$semantic-primary",
  fontFamily: "$$component-label-font",
  color: "$$component-label-color",
  fontSize: "$sm",
})

export default Label
