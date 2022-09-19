import type { FC } from "react"

import Box from "src/components/common/box"
import Heading from "src/components/common/heading"
import Text from "src/components/common/text"
import Flex from "src/components/common/flex"
import { LazyLoader } from "src/components/common/loader"
import { useGetUsersQuery } from "../user.slice.api"
import { theme } from "src/styles/theme/stitches.config"

const UserList: FC = () => {
  const {
    isLoading: isGetUsersLoading,
    isError: isGetUsersError,
    data: users,
  } = useGetUsersQuery()

  if (isGetUsersLoading)
    return <LazyLoader show={isGetUsersLoading} type="ping" />

  if (isGetUsersError) return <Text role="alert">Failure</Text>

  if (users)
    return (
      <>
        <Heading as="h1" variant="h1">
          User list
        </Heading>
        <Flex
          as="ul"
          direction="column"
          gap="lg"
          justify="space-around"
          css={{
            listStyleType: "none",
            padding: 0,
            marginTop: theme.space.md,
          }}
        >
          {users.map((u) => (
            <Box as="li" key={u.id}>
              <Text>{u.name}</Text>
              <Text
                fontWeight="regular"
                as="small"
                color="functional-low"
                fontSize="sm"
              >
                {u.username}
              </Text>
            </Box>
          ))}
        </Flex>
      </>
    )

  return null
}

export default UserList
