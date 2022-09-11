import ThemeSelect from "src/common/theme-select"

import { HiHome } from "src/icons/hero-icon"

import { Container, Nav } from "./header.styles"
import { styled, theme } from "src/theme/stitches.config"
import Link from "next/link"

const IconButton = styled("button", {
  padding: theme.space.xs,
  borderRadius: theme.radii.md,
  variants: {
    variant: {
      filled: {
        border: "none",
        backgroundColor: theme.colors.solid,
        color: theme.colors["text-fg-white"],
        "&:hover": {
          backgroundColor: theme.colors["solid-hovered"],
          boxShadow: theme.shadows.medium,
          cursor: "pointer",
        },
      },
      outline: {
        border: `1px solid ${theme.colors.solid}`,
        backgroundColor: "transparent",
        color: theme.colors.solid,
        "&:hover": {
          cursor: "pointer",
          border: `1px solid ${theme.colors["solid-hovered"]}`,
          backgroundColor: "transparent",
          boxShadow: "unset",
        },
      },
    },
  },
  defaultVariants: {
    variant: "filled",
  },
})

const Header = () => (
  <Container>
    <Nav>
      <Link href="/" passHref>
        <IconButton as="a" aria-label="Go to home" title="Home">
          <HiHome />
        </IconButton>
      </Link>
      <ThemeSelect />
    </Nav>
  </Container>
)

export default Header
