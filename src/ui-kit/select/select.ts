import { styled } from "src/ui-kit/stitches.config"

const Select = styled("select", {
  "$$component-select-font": "$fonts$semantic-primary",
  fontFamily: "$$component-select-font",
  padding: "$xs $md",
  fontSize: "$sm",
  textTransform: "uppercase",
  "&:hover": {
    cursor: "pointer",
  },
})

export default Select
