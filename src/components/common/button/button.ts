import type * as Stitches from "@stitches/react"

import { styled, theme } from "src/styles/theme/stitches.config"

const Button = styled("button", {
  borderRadius: 9999,
  fontFamily: theme.fonts.sans,
  fontSize: theme.fontSizes.md,
  padding: `${theme.space.xs} ${theme.space.lg}`,
  fontWeight: theme.fontWeights.medium,
  border: "1px solid",
  boxShadow: theme.shadows.low,

  compoundVariants: [
    {
      colorScheme: "brand",
      variant: "filled",
      css: {
        backgroundColor: theme.colors.solid,
        borderColor: theme.colors.solid,
        color: theme.colors["text-fg-black"],
        "&:hover": {
          backgroundColor: theme.colors["solid-hovered"],
          borderColor: theme.colors["solid-hovered"],
          cursor: "pointer",
        },
      },
    },
    {
      colorScheme: "danger",
      variant: "filled",
      css: {
        backgroundColor: theme.colors["solid-danger"],
        borderColor: theme.colors["solid-danger"],
        color: theme.colors["text-fg-black"],
        "&:hover": {
          backgroundColor: theme.colors["solid-hovered-danger"],
          borderColor: theme.colors["solid-hovered-danger"],
          cursor: "pointer",
        },
      },
    },
    {
      colorScheme: "brand",
      variant: "outlined",
      css: {
        backgroundColor: "transparent",
        borderColor: theme.colors.border,
        color: theme.colors["text-vibrant-low"],
        fontWeight: theme.fontWeights["semi-bold"],
        "&:hover": {
          borderColor: theme.colors["border-hovered"],
          cursor: "pointer",
        },
      },
    },
    {
      colorScheme: "danger",
      variant: "outlined",
      css: {
        backgroundColor: "transparent",
        borderColor: theme.colors["border-danger"],
        color: theme.colors["text-danger-low"],
        fontWeight: theme.fontWeights["semi-bold"],
        "&:hover": {
          borderColor: theme.colors["border-hovered-danger"],
          cursor: "pointer",
        },
      },
    },
  ],
  variants: {
    colorScheme: {
      danger: {},
      brand: {},
    },
    variant: {
      filled: {},
      outlined: {},
    },
    size: {
      small: {
        fontSize: theme.fontSizes.sm,
        padding: `${theme.space.xxs} ${theme.space.sm}`,
      },
    },
    fullWidth: {
      true: {
        width: "100%",
      },
    },
  },
  defaultVariants: {
    variant: "filled",
    colorScheme: "brand",
  },
})

export type ButtonVariants = Stitches.VariantProps<typeof Button>
export default Button
