import Link from "next/link"
import { IoLogoGithub } from "react-icons/io"

import IconButton from "src/ui/icon-button"
import ThemeSelect from "src/common/theme-select"
import { HiHome } from "src/icons/hero-icon"
import { Container, Nav } from "./header.styles"
import { styled, theme } from "src/theme/stitches.config"
import Flex from "src/ui/flex"

const GoToHome = () => (
  <Link href="/" passHref>
    <IconButton as="a" aria-label="Go to home" title="Home">
      <HiHome />
    </IconButton>
  </Link>
)

const StyledLink = styled("a", {
  color: theme.colors["text-vibrant-low"],
  fontFamily: theme.fonts.sans,
  "&:hover": {
    color: theme.colors["text-vibrant"],
    cursor: "pointer",
  },
  variants: {
    textDecoration: {
      none: {
        textDecoration: "none",
      },
    },
  },
})
const GoToGH = () => (
  <StyledLink
    href="https://github.com/notAro14/next-ts-starter"
    rel="noreferrer"
    target="_blank"
    textDecoration="none"
  >
    <IconButton variant="outline" aria-label="Go to Repo" title="Repo">
      <IoLogoGithub />
    </IconButton>
  </StyledLink>
)

const Header = () => (
  <Container>
    <Nav>
      <Flex gap="md" align="center">
        <GoToHome />
        <GoToGH />
        <Link passHref href="/users">
          <StyledLink>`/users` endpoint</StyledLink>
        </Link>
      </Flex>
      <ThemeSelect />
    </Nav>
  </Container>
)

export default Header
