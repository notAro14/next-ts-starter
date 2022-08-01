import { styled } from "src/ui/stitches.config"

const Button = styled("button", {
  "$$component-button-font": "$fonts$semantic-primary",
  "$$component-button-font-size": "$fontSizes$md",
  "$$component-button-radius": "$radii$sm",
  "$$component-button-sizing": "$space$xs $space$lg",
  "$$component-button-font-weight": 400,

  borderRadius: "$$component-button-radius",
  fontFamily: "$$component-button-font",
  fontSize: "$$component-button-font-size",
  padding: "$$component-button-sizing",
  fontWeight: "$$component-button-font-weight",
  border: "1px solid",

  variants: {
    variant: {
      filled: {
        "$$component-button-bg": "$colors$semantic-solid",
        "$$component-button-border": "$$component-button-bg",
        "$$component-button-color": "$colors$whiteA12",
        "$$component-button-bg-hovered": "$colors$semantic-solid-hovered",
        "$$component-button-border-hovered": "$$component-button-bg-hovered",

        backgroundColor: "$$component-button-bg",
        borderColor: "$$component-button-border",
        color: "$$component-button-color",
        "&:hover": {
          backgroundColor: "$$component-button-bg-hovered",
          borderColor: "$$component-button-border-hovered",
          cursor: "pointer",
        },
      },
      outline: {
        "$$component-button-border": "$colors$semantic-ui-border",
        "$$component-button-border-hovered":
          "$colors$semantic-ui-border-hovered",
        "$$component-button-color": "$colors$semantic-text-lo",
        "$$component-button-font-weight": 500,

        backgroundColor: "transparent",
        borderColor: "$$component-button-border",
        color: "$$component-button-color",
        "&:hover": {
          borderColor: "$$component-button-border-hovered",
          cursor: "pointer",
        },
      },
    },
    size: {
      small: {
        "$$component-button-font-size": "$fontSizes$sm",
        "$$component-button-sizing": "$space$xxs $space$sm",
      },
    },
  },
  defaultVariants: {
    variant: "filled",
  },
})

export default Button
