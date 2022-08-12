import { keyframes, styled } from "src/ui/stitches.config"

const spin = keyframes({
  to: {
    transform: "rotate(360deg)",
  },
})

const Spinner = styled("div", {
  display: "block",
  animation: `${spin} 1.5s ease-in-out infinite`,
  borderRadius: "50%",
  border: "3px solid",
  borderColor: "$semantic-ui-bg",
  borderTopColor: "$semantic-solid",
  width: "$$size",
  height: "$$size",
  variants: {
    size: {
      sm: {
        $$size: "25px",
      },
      md: {
        $$size: "50px",
      },
      lg: {
        $$size: "75px",
      },
    },
  },
  defaultVariants: {
    size: "sm",
  },
})

export default Spinner
