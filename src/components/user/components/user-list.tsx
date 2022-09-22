import type { FC } from "react"

import * as Avatar from "src/components/common/avatar"
import Box from "src/components/common/box"
import Heading from "src/components/common/heading"
import Text from "src/components/common/text"
import Flex from "src/components/common/flex"
import { Loader } from "src/components/common/loader"
import { useGetUsersQuery } from "../user.slice.api"
import { theme } from "src/styles/theme/stitches.config"

const UserList: FC = () => {
  const {
    isLoading: isGetUsersLoading,
    isError: isGetUsersError,
    data: users,
  } = useGetUsersQuery()

  if (isGetUsersLoading) return <Loader />

  if (isGetUsersError) return <Text role="alert">Failure</Text>

  if (users)
    return (
      <>
        <Heading
          as="h1"
          variant="h1"
          css={{
            marginBottom: theme.space.md,
            textAlign: "center",
            "@sm": {
              textAlign: "unset",
            },
          }}
        >
          User list
        </Heading>
        <Flex
          as="ul"
          direction="column"
          gap="2xl"
          justify="space-around"
          css={{
            listStyleType: "none",
          }}
        >
          {users.map((u) => {
            const fallback = u.name.charAt(0)
            return (
              <Flex gap="md" align="center" as="li" key={u.id}>
                <Avatar.Root rounded withInsetShadow>
                  <Avatar.Image
                    src={`https://robohash.org/${u.username}`}
                    alt={u.name}
                  />
                  <Avatar.Fallback delayMs={600}>{fallback}</Avatar.Fallback>
                </Avatar.Root>
                <Box>
                  <Text fontSize="lg" color="functional">
                    {u.name}
                  </Text>
                  <Text
                    fontWeight="regular"
                    as="small"
                    color="accent-low"
                    fontSize="sm"
                  >
                    {u.username}
                  </Text>
                </Box>
              </Flex>
            )
          })}
        </Flex>
      </>
    )

  return null
}

export default UserList
