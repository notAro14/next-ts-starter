import { styled, theme } from "src/styles/theme/stitches.config"

const Link = styled("a", {
  color: theme.colors["text-vibrant-low"],
  fontFamily: theme.fonts.sans,
  textDecoration: "none",
  variants: {
    underline: {
      true: {
        textDecoration: "underline",
      },
    },
  },
})

export const NavLink = styled(Link, {
  color: theme.colors["text-functional"],
  variants: {
    active: {
      true: {
        color: theme.colors["text-vibrant-low"],
        fontWeight: theme.fontWeights.regular,
      },
    },
  },
})

export default Link
