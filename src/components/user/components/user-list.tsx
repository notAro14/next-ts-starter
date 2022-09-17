import type { FC } from "react"

import Heading from "src/components/common/ui/heading"
import Text from "src/components/common/ui/text"
import Flex from "src/components/common/ui/flex"

import { useGetUsersQuery } from "../user.slice.api"

const UserList: FC = () => {
  const {
    isLoading: isGetUsersLoading,
    isError: isGetUsersError,
    data: users,
  } = useGetUsersQuery()

  if (isGetUsersLoading)
    return <Text role="progressbar">Fetching users using RTK query</Text>

  if (isGetUsersError) return <Text role="alert">Failure</Text>

  if (users)
    return (
      <>
        <Heading as="h1" variant="h1">
          User list
        </Heading>
        <Flex as="ul" direction="column" gap="xxs">
          {users.map((u) => (
            <Text as="li" key={u.id}>
              {u.name}
            </Text>
          ))}
        </Flex>
      </>
    )

  return null
}

export default UserList
