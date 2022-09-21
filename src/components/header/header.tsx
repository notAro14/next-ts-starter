import { useRouter } from "next/router"
import NextLink from "next/link"
import { ExternalLinkIcon } from "@radix-ui/react-icons"
import { useSession, signIn, signOut } from "next-auth/react"

import ToggleTheme from "src/components/common/toggle-theme"
import { Container, Nav } from "./header.styles"
import { theme } from "src/styles/theme/stitches.config"
import Flex from "src/components/common/flex"
import { NavLink } from "src/components/common/link"
import Text from "src/components/common/text"
import Button from "src/components/common/button"

const Auth = () => {
  const { data: session } = useSession()
  if (session)
    return (
      <Flex align="baseline" gap="xs">
        <Text fontSize="xs">
          Signed in as {session.user?.name || session.user?.email}
        </Text>
        <Button
          size="small"
          css={{
            backgroundColor: theme.colors["solid-danger"],
            borderColor: theme.colors["solid-danger"],
            "&:hover": {
              backgroundColor: theme.colors["solid-hovered-danger"],
              borderColor: theme.colors["solid-hovered-danger"],
            },
          }}
          onClick={() => signOut()}
        >
          Sign out
        </Button>
      </Flex>
    )

  return (
    <Button size="small" onClick={() => signIn()}>
      Sign In
    </Button>
  )
}

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
        <Flex align="center" gap="md">
          <ToggleTheme />
          <Auth />
        </Flex>
      </Nav>
    </Container>
  )
}

export default Header
