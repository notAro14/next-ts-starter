import type * as Stitches from "@stitches/react"

import { styled, theme } from "src/styles/theme/stitches.config"

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
  [buttonFont]: theme.fonts.sans,
  [buttonFontSize]: theme.fontSizes.md,
  [buttonRadius]: theme.radii.sm,
  [buttonPadding]: `${theme.space.xs} ${theme.space.lg}`,
  [buttonFontWeight]: 400,
  [buttonBgColor]: theme.colors.solid,
  [buttonBorderColor]: buttonBgColor,
  [buttonBorderColorHovered]: buttonBgColorHovered,
  [buttonColor]: theme.colors["text-fg-white"],
  [buttonBgColorHovered]: theme.colors["solid-hovered"],

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
        [buttonBorderColor]: theme.colors.border,
        [buttonBorderColorHovered]: theme.colors["border-hovered"],
        [buttonColor]: theme.colors["text-vibrant-low"],
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
        [buttonFontSize]: theme.fontSizes.sm,
        [buttonPadding]: `${theme.space.xxs} ${theme.space.sm}`,
      },
    },
  },
  defaultVariants: {
    variant: "filled",
  },
})

export type ButtonVariants = Stitches.VariantProps<typeof Button>
export default Button
