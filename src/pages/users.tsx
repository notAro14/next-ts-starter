import type { NextPageWithLayout } from "src/types"

import Heading from "src/ui/heading"

import SEO from "src/common/seo"

import { useGetUsersQuery } from "src/api/services/user"
import Text from "src/ui/text"
import Flex from "src/ui/flex"

const UsersPage: NextPageWithLayout = () => {
  const { data, isLoading, isError } = useGetUsersQuery()
  return (
    <>
      <SEO title="User list" />

      <Heading as="h1" variant="h1">
        User list
      </Heading>
      {isLoading && (
        <Text role="progressbar">Fetching users using RTK query</Text>
      )}
      {isError && <Text role="alert">Failure</Text>}
      {data && (
        <Flex as="ul" direction="column" gap="xxs">
          {data.map((u) => (
            <Text key={u.id}>{u.name}</Text>
          ))}
        </Flex>
      )}
    </>
  )
}

export default UsersPage
