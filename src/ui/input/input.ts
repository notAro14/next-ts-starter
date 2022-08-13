import { styled } from "src/ui/stitches.config"

export const FormControl = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$xxs",
})

export const Label = styled("label", {
  color: "$semantic-text-hi",
  fontSize: "$sm",
  fontFamily: "$semantic-primary",
  userSelect: "none",
})

export const Input = styled("input", {
  padding: "$xs",
  fontFamily: "$semantic-primary",
  fontSize: "$md",
  color: "$semantic-text-hi-gray",
  backgroundColor: "$semantic-bg",
  border: "none",
  fontWeight: 300,
  borderRadius: "$sm",
  "&:focus": {
    outline: "2px solid",
    outlineColor: "$semantic-solid",
  },
})

export default Input
