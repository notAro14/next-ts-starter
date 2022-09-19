import {
  AppShell,
  Box,
  Header,
  Footer,
  Anchor,
  Group,
  Kbd,
  MediaQuery,
  Container,
  Center,
} from "@mantine/core"
import Link from "next/link"
import type { FC } from "react"
import { ExternalLinkIcon } from "@radix-ui/react-icons"
//import useDisclosure from "src/hooks/use-disclosure"

import ToggleColorScheme from "src/components/common/toggle-color-scheme"

//const MyNavbar: FC<{ isOpen: boolean }> = ({ isOpen }) => {
//  const { pathname } = useRouter()
//  return (
//    <Navbar
//      hidden={!isOpen}
//      p="xs"
//      hiddenBreakpoint="sm"
//      width={{ sm: 200, lg: 300 }}
//    >
//      <Navbar.Section>
//        <Link passHref href="/">
//          <NavLink
//            component="a"
//            active={pathname === "/"}
//            label="Home"
//            icon={<HomeIcon />}
//          />
//        </Link>
//        <Link passHref href="/user/view">
//          <NavLink
//            component="a"
//            active={pathname === "/user/view"}
//            label="User"
//            icon={<ListBulletIcon />}
//          />
//        </Link>
//      </Navbar.Section>
//    </Navbar>
//  )
//}

//const MyHeader: FC<{
//  isNavbarOpen: boolean
//  toggleNavbar(): void
//}> = ({ isNavbarOpen, toggleNavbar }) => {
//  return (
//    <Header height={50} p="xs">
//      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
//        <MediaQuery
//          largerThan="sm"
//          styles={{
//            display: "none",
//          }}
//        >
//          <Burger opened={isNavbarOpen} onClick={toggleNavbar} size="sm" />
//        </MediaQuery>
//        <Text>Header content</Text>
//      </div>
//    </Header>
//  )
//}

interface Props {
  children: JSX.Element
}
export const PublicLayout: FC<Props> = ({ children }) => {
  //const { isOpen, toggle } = useDisclosure()
  return (
    <AppShell
      //navbar={<MyNavbar isOpen={isOpen} />}
      //header={<MyHeader isNavbarOpen={isOpen} toggleNavbar={toggle} />}
      header={
        <Header p="xs" height={50}>
          <Group
            sx={{
              height: "100%",
            }}
            position="apart"
          >
            <Group>
              <Link passHref href="/">
                <Anchor component="a">Home</Anchor>
              </Link>
              <Link passHref href="/user/view">
                <Anchor component="a">User</Anchor>
              </Link>
              <Anchor
                component="a"
                href="https://github.com/notAro14/next-ts-starter"
                target="_blank"
                rel="noreferrer"
              >
                <Group spacing="xs">
                  <Box component="span">Github</Box>
                  <ExternalLinkIcon />
                </Group>
              </Anchor>
            </Group>
            <Group>
              <MediaQuery styles={{ display: "none" }} smallerThan="xs">
                <Kbd>⌘ + J</Kbd>
              </MediaQuery>
              <ToggleColorScheme />
            </Group>
          </Group>
        </Header>
      }
      footer={
        <Footer p="xs" height={50}>
          <Center>
            Made by{" "}
            <Anchor
              component="a"
              href="https://github.com/notAro14"
              target="_blank"
              rel="noreferrer"
            >
              Aro Andriamaro
            </Anchor>
          </Center>
        </Footer>
      }
    >
      <Container>{children}</Container>
    </AppShell>
  )
}

export default PublicLayout
