import type { FC } from "react"

import Heading from "src/components/common/heading"
import Text from "src/components/common/text"
import Flex from "src/components/common/flex"
import Loader from "src/components/common/loader"

import { useGetUsersQuery } from "../user.slice.api"

const UserList: FC = () => {
  const {
    isLoading: isGetUsersLoading,
    isError: isGetUsersError,
    data: users,
  } = useGetUsersQuery()

  if (isGetUsersLoading) return <Loader type="ping" />

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
