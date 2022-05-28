import { useQuery } from "react-query"

import Flex from "src/shared/flex"
import Text from "src/shared/text"
import { fetchUsers } from "./user-list.helpers"

const UserList = () => {
  const { status, data: users } = useQuery("user/all", fetchUsers)
  return (
    <Flex direction="column">
      {status === "loading" && <Text role="progressbar">Loading users...</Text>}
      {status === "error" && (
        <Text role="alert" css={{ color: "$error" }}>
          Failed to get users
        </Text>
      )}
      {status === "success" &&
        users.map(({ id, name }) => <Text key={id}>{name}</Text>)}
    </Flex>
  )
}

export default UserList
