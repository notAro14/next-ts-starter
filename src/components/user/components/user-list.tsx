import type { FC } from "react"
import { Text, Loader, Title, List, Avatar, Box } from "@mantine/core"

import { useGetUsersQuery } from "../user.slice.api"

const UserList: FC = () => {
  const {
    isLoading: isGetUsersLoading,
    isError: isGetUsersError,
    data: users,
  } = useGetUsersQuery()

  if (isGetUsersLoading) return <Loader role="progressbar" variant="dots" />

  if (isGetUsersError)
    return (
      <Text role="alert" color="red">
        Failed to get users
      </Text>
    )

  if (users)
    return (
      <>
        <Title order={1}>User list</Title>

        <List spacing="sm">
          {users.map((u) => (
            <List.Item
              key={u.id}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <Avatar src={`https://robohash.org/${u.name}`} radius="xl" />
              <Box>
                <Text size="sm" weight={500}>
                  {u.name}
                </Text>
                <Text color="dimmed" size="xs">
                  {u.email}
                </Text>
              </Box>
            </List.Item>
          ))}
        </List>
      </>
    )

  return null
}

export default UserList
