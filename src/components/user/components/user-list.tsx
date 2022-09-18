import type { FC } from "react"
import { Text, User, Grid, Loading } from "@nextui-org/react"

import { useGetUsersQuery } from "../user.slice.api"

const UserList: FC = () => {
  const {
    isLoading: isGetUsersLoading,
    isError: isGetUsersError,
    data: users,
  } = useGetUsersQuery()

  if (isGetUsersLoading) return <Loading role="progressbar" type="points" />

  if (isGetUsersError)
    return (
      <Text role="alert" color="error">
        Failed to get users
      </Text>
    )

  if (users)
    return (
      <>
        <Text h1>User list</Text>
        <Grid.Container gap={3} as="ul">
          {users.map((u) => (
            <Grid key={u.id} as="li">
              <User
                src={`https://robohash.org/${u.name}`}
                name={u.name}
                size="xl"
                zoomed
                bordered
                description={u.username}
              />
            </Grid>
          ))}
        </Grid.Container>
      </>
    )

  return null
}

export default UserList
