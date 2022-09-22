import { useRouter } from "next/router"
import NextLink from "next/link"
import { useSession, signIn, signOut } from "next-auth/react"

import ToggleTheme from "src/components/common/toggle-theme"
import { Container, Nav } from "./header.styles"
import Flex from "src/components/common/flex"
import Text from "src/components/common/text"
import Button from "src/components/common/button"
import { LazyLoader } from "src/components/common/loader"
import Link from "src/components/common/link"

const Auth = () => {
  const { data: session, status } = useSession()
  switch (status) {
    case "loading":
      return <LazyLoader show />

    case "unauthenticated":
      return (
        <Button size="small" colorScheme="accent" onClick={() => signIn()}>
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
            <Link variant="navlink" active={pathname === "/"}>
              Home
            </Link>
          </NextLink>
          <NextLink passHref href="/user/view">
            <Link variant="navlink" active={pathname === "/user/view"}>
              Protected
            </Link>
          </NextLink>
          <Link
            variant="navlink"
            href="https://github.com/notAro14/next-ts-starter"
            isExternal
          >
            Github
          </Link>
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
