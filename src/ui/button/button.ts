import { styled } from "src/ui/stitches.config"

const buttonFont = "$$button-font"
const buttonFontSize = "$$button-font-size"
const buttonFontWeight = "$$button-font-size"
const buttonRadius = "$$button-radius"
const buttonPadding = "$$button-padding"
const buttonBgColor = "$$button-bg-color"
const buttonBgColorHovered = "$$button-bg-color-hovered"
const buttonBorderColor = "$$button-border-color"
const buttonBorderColorHovered = "$$button-border-color-hovered"
const buttonColor = "$$button-color"

const Button = styled("button", {
  [buttonFont]: "$fonts$semantic-primary",
  [buttonFontSize]: "$fontSizes$md",
  [buttonRadius]: "$radii$sm",
  [buttonPadding]: "$space$xs $space$lg",
  [buttonFontWeight]: 400,
  [buttonBgColor]: "$colors$semantic-solid",
  [buttonBorderColor]: buttonBgColor,
  [buttonBorderColorHovered]: buttonBgColorHovered,
  [buttonColor]: "$colors$whiteA12",
  [buttonBgColorHovered]: "$colors$semantic-solid-hovered",

  borderRadius: buttonRadius,
  fontFamily: buttonFont,
  fontSize: buttonFontSize,
  padding: buttonPadding,
  fontWeight: buttonFontWeight,
  border: "1px solid",

  variants: {
    variant: {
      filled: {
        backgroundColor: buttonBgColor,
        borderColor: buttonBorderColor,
        color: buttonColor,
        "&:hover": {
          backgroundColor: buttonBgColorHovered,
          borderColor: buttonBorderColorHovered,
          cursor: "pointer",
        },
      },
      outline: {
        [buttonBorderColor]: "$colors$semantic-ui-border",
        [buttonBorderColorHovered]: "$colors$semantic-ui-border-hovered",
        [buttonColor]: "$colors$semantic-text-lo",
        [buttonFontWeight]: 500,

        backgroundColor: "transparent",
        borderColor: buttonBorderColor,
        color: buttonColor,
        "&:hover": {
          borderColor: buttonBorderColorHovered,
          cursor: "pointer",
        },
      },
    },
    size: {
      small: {
        [buttonFontSize]: "$fontSizes$sm",
        [buttonPadding]: "$space$xxs $space$sm",
      },
    },
  },
  defaultVariants: {
    variant: "filled",
  },
})

export default Button
