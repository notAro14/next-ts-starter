// VENDORS
import type { NextPage } from "next"
import { useReducer } from "react"
// COMPONENTS
import UserList from "src/features/user-list"
import Box from "src/ui/box"
import Button from "src/ui/button"
import Flex from "src/ui/flex"
import Heading from "src/ui/heading"
import SEO from "src/components/seo"
import Link from "src/ui/link"
// FUNCTIONS
import useAutoAnimation from "src/utils/hooks/use-autoanimation"

const UserListPage: NextPage = () => {
  const [show, enable] = useReducer(() => true, false)
  const ulRef = useAutoAnimation<HTMLUListElement>()

  return (
    <>
      <SEO>User List</SEO>

      <Heading as="h1" css={{ fontSize: "$2xl" }}>
        User list
      </Heading>
      <Box as="main">
        <Flex
          ref={ulRef}
          direction="column"
          as="ul"
          css={{ listStyleType: "none", marginBottom: "$lg" }}
        >
          {show && <UserList />}
        </Flex>
        <Flex direction="column" css={{ alignItems: "flex-start" }} gap="4">
          <Button
            variant="outline"
            onClick={() => {
              enable()
            }}
          >
            Fetch users
          </Button>
          <Link href="/">Go to index page</Link>
        </Flex>
      </Box>
    </>
  )
}

export default UserListPage
