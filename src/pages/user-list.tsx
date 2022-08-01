// VENDORS
import type { NextPage } from "next"
import { useReducer } from "react"
// COMPONENTS
import UserList from "src/features/user-list"
import Box from "src/ui/box"
import Button from "src/ui/button"
import Heading from "src/ui/heading"
import SEO from "src/components/seo"
import Link from "src/ui/link"
// FUNCTIONS
import useAutoAnimation from "src/utils/hooks/use-autoanimation"
import { styled } from "src/ui/stitches.config"

const UserListContainer = styled("ul", {
  listStyleType: "none",
  marginBottom: "$lg",
  display: "grid",
  gap: "$xl",
  "@sm": {
    gridTemplateColumns: "1fr",
  },
  "@md": {
    gridTemplateColumns: "1fr 1fr",
  },
  "@lg": {
    gridTemplateColumns: "repeat(3, 1fr)",
  },
})

const UserListPage: NextPage = () => {
  const [show, enable] = useReducer(() => true, false)
  const ulRef = useAutoAnimation<HTMLUListElement>()

  return (
    <>
      <SEO>User List</SEO>

      <Heading as="h1" css={{ fontSize: "$2xl" }}>
        User list
      </Heading>
      <Link href="/">Go to index page</Link>
      <Box as="main">
        <UserListContainer ref={ulRef}>
          {show && <UserList />}
        </UserListContainer>
        <Button
          variant="outline"
          onClick={() => {
            enable()
          }}
        >
          Fetch users
        </Button>
      </Box>
    </>
  )
}

export default UserListPage
