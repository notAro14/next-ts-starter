// VENDORS
import type { NextPage } from "next"
import { ErrorBoundary } from "react-error-boundary"
import { useQueryErrorResetBoundary } from "@tanstack/react-query"
// COMPONENTS
import UserList from "src/features/user-list"
import Box from "src/ui/box"
import Button from "src/ui/button"
import Heading from "src/ui/heading"
import SEO from "src/components/seo"
import Link from "src/ui/link"
import Text from "src/ui/text"
import Flex from "src/ui/flex"
// FUNCTIONS
import useAutoAnimation from "src/utils/hooks/use-autoanimation"
import useEnableOnce from "src/utils/hooks/use-enable-once"
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
  const [isEnable, enableOnce] = useEnableOnce()
  const ulRef = useAutoAnimation<HTMLUListElement>()
  const { reset } = useQueryErrorResetBoundary()

  return (
    <>
      <SEO>User List</SEO>

      <Heading as="h1" css={{ fontSize: "$2xl" }}>
        User list
      </Heading>
      <Link href="/">Go to index page</Link>
      <ErrorBoundary
        onReset={reset}
        fallbackRender={({ resetErrorBoundary }) => (
          <Flex direction="column">
            <Text role="alert" error>
              Failed to get users
            </Text>
            <Button onClick={() => resetErrorBoundary()}>Try Again</Button>
          </Flex>
        )}
      >
        <Box as="main">
          <UserListContainer ref={ulRef}>
            {isEnable && <UserList />}
          </UserListContainer>
          <Button
            variant="outline"
            onClick={() => {
              enableOnce()
            }}
          >
            Fetch users
          </Button>
        </Box>
      </ErrorBoundary>
    </>
  )
}

export default UserListPage
