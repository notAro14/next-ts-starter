import { useQuery } from "@tanstack/react-query"

import Text from "src/ui/text"
import { fetchUsers } from "./user-list.helpers"

const UserList = () => {
  const { status, data: users } = useQuery(["users"], fetchUsers)
  return (
    <>
      {status === "loading" && <Text role="progressbar">Loading users...</Text>}
      {status === "error" && (
        <Text role="alert" error>
          Failed to get users
        </Text>
      )}
      {status === "success" &&
        users.map(({ id, name }) => (
          <Text as="li" key={id}>
            {name}
          </Text>
        ))}
    </>
  )
}

export default UserList
