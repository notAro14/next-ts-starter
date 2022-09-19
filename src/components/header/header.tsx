import { useRouter } from "next/router"
import NextLink from "next/link"
import { ExternalLinkIcon } from "@radix-ui/react-icons"

import ToggleTheme from "src/components/common/toggle-theme"
import { Container, Nav } from "./header.styles"
import { theme } from "src/styles/theme/stitches.config"
import Flex from "src/components/common/flex"
import { NavLink } from "src/components/common/link"

const Header = () => {
  const { pathname } = useRouter()
  return (
    <Container>
      <Nav>
        <Flex gap="md" align="center">
          <NextLink href="/" passHref>
            <NavLink active={pathname === "/"}>Home</NavLink>
          </NextLink>
          <NextLink passHref href="/user/view">
            <NavLink active={pathname === "/user/view"}>Users</NavLink>
          </NextLink>
          <NavLink
            href="https://github.com/notAro14/next-ts-starter"
            rel="noreferrer"
            target="_blank"
            css={{
              display: "flex",
              alignItems: "center",
              gap: theme.space.xxs,
            }}
          >
            Github <ExternalLinkIcon />
          </NavLink>
        </Flex>
        <ToggleTheme />
      </Nav>
    </Container>
  )
}

export default Header
