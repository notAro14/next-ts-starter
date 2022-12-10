import Link from "next/link"
import { useGetUsersQuery } from "src/api/user/user.slice.api"
import { heading, link, text } from "src/components/ui"

export default function ViewUsers() {
  const {
    isLoading: isGetUsersLoading,
    isError: isGetUsersError,
    data: users,
  } = useGetUsersQuery()

  if (isGetUsersLoading)
    return (
      <p className={text} role="progressbar">
        Loading users...
      </p>
    )

  if (isGetUsersError)
    return (
      <p className={text} role="alert">
        Failure
      </p>
    )

  if (users)
    return (
      <>
        <h1 className={heading}>User list</h1>
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
                  <a className={link}>{u.name}</a>
                </Link>
              </li>
            )
          })}
        </ul>
      </>
    )

  return null
}
