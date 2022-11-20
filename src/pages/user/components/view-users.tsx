import type { FC } from "react"

import { useGetUsersQuery } from "../../../api/user/user.slice.api"

const ViewUsers: FC = () => {
  const {
    isLoading: isGetUsersLoading,
    isError: isGetUsersError,
    data: users,
  } = useGetUsersQuery()

  if (isGetUsersLoading) return <p role="progressbar">Loading users...</p>

  if (isGetUsersError) return <p role="alert">Failure</p>

  if (users)
    return (
      <>
        <h1>User list</h1>
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {users.map((u) => {
            return (
              <li key={u.id}>
                <p>{u.name}</p>
                <small>{u.username}</small>
              </li>
            )
          })}
        </ul>
      </>
    )

  return null
}

export default ViewUsers
