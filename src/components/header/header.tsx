import { useRouter } from "next/router"
import NextLink from "next/link"
import { Navbar } from "@nextui-org/react"

import ThemeSwitcherButton from "src/components/common/theme-switcher-button"

const Header = () => {
  const { pathname } = useRouter()
  return (
    <Navbar isBordered variant="floating">
      <Navbar.Content activeColor="primary">
        <NextLink passHref href="/">
          <Navbar.Link isActive={pathname === "/"}>Home</Navbar.Link>
        </NextLink>
        <NextLink passHref href="/user/view">
          <Navbar.Link isActive={pathname === "/user/view"}>Users</Navbar.Link>
        </NextLink>
        <Navbar.Link
          isExternal
          href="https://github.com/notAro14/next-ts-starter"
        >
          Github
        </Navbar.Link>
      </Navbar.Content>
      <Navbar.Content>
        <Navbar.Item>
          <ThemeSwitcherButton />
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  )
}

export default Header
