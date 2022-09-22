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
import { LazyLoader } from "src/components/common/loader"

const Auth = () => {
  const { data: session, status } = useSession()
  switch (status) {
    case "loading":
      return <LazyLoader show />

    case "unauthenticated":
      return (
        <Button size="small" onClick={() => signIn()}>
          Sign In
        </Button>
      )
    case "authenticated":
      return (
        <Flex align="baseline" gap="xs">
          <Text fontSize="xs">{session.user?.name || session.user?.email}</Text>
          <Button
            size="small"
            colorScheme="danger"
            variant="outlined"
            onClick={() => signOut({ callbackUrl: "/" })}
          >
            Sign out
          </Button>
        </Flex>
      )
  }
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
            <NavLink active={pathname === "/user/view"}>Protected</NavLink>
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
        <Flex align="center" gap="sm">
          <Auth />
          <ToggleTheme />
        </Flex>
      </Nav>
    </Container>
  )
}

export default Header
