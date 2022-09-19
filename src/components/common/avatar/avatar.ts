import * as AvatarPrimitive from "@radix-ui/react-avatar"

import { styled, theme } from "src/styles/theme/stitches.config"

const StyledAvatar = styled(AvatarPrimitive.Root, {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  verticalAlign: "middle",
  overflow: "hidden",
  userSelect: "none",

  backgroundColor: theme.colors.bg,
  variants: {
    borderRadius: {
      sm: {
        borderRadius: theme.radii.sm,
      },
      md: {
        borderRadius: theme.radii.md,
      },
      lg: {
        borderRadius: theme.radii.lg,
      },
    },
    rounded: {
      true: {
        borderRadius: "100%",
      },
    },
    borderColor: {
      solid: {},
      "border-subtle": {},
      border: {},
    },
    bordered: {
      true: {},
    },
    zoomed: {
      true: {
        "& img": {
          transition: "transform 200ms ease-out",
          "&:hover": {
            transform: "scale(1.2)",
          },
        },
      },
    },
    size: {
      sm: {
        width: 40,
        height: 40,
      },
      md: {
        width: 50,
        height: 50,
      },
      lg: {
        width: 65,
        height: 65,
      },
    },
  },
  compoundVariants: [
    {
      bordered: true,
      borderColor: "solid",
      css: {
        border: "2px solid",
        borderColor: theme.colors.solid,
      },
    },
    {
      bordered: true,
      borderColor: "border-subtle",
      css: {
        border: "2px solid",
        borderColor: theme.colors["border-subtle"],
      },
    },
    {
      bordered: true,
      borderColor: "border",
      css: {
        border: "2px solid",
        borderColor: theme.colors.border,
        "&:hover": {
          borderColor: theme.colors["border-hovered"],
        },
      },
    },
  ],
  defaultVariants: {
    size: "lg",
  },
})

const StyledImage = styled(AvatarPrimitive.Image, {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "inherit",
})

const StyledFallback = styled(AvatarPrimitive.Fallback, {
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.colors.ui,
  color: theme.colors.solid,
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
  fontFamily: theme.fonts.sans,
  textTransform: "uppercase",
  borderRadius: "inherit",
})

// Exports
export const Root = StyledAvatar
export const Image = StyledImage
export const Fallback = StyledFallback
