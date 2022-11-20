import Link from "next/link"
import { useGetUsersQuery } from "../../api/user/user.slice.api"

export default function ViewUsers() {
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
                <Link href={`/users/${u.id}`}>
                  <a>{u.name}</a>
                </Link>
              </li>
            )
          })}
        </ul>
      </>
    )

  return null
}
