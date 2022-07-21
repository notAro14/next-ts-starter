import { useQuery } from "react-query"

import Flex from "src/ui-kit/flex"
import Text from "src/ui-kit/text"
import { fetchUsers } from "./user-list.helpers"

const UserList = () => {
  const { status, data: users } = useQuery("user/all", fetchUsers)
  return (
    <Flex direction="column" as="ul" css={{ listStyleType: "none" }}>
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
    </Flex>
  )
}

export default UserList
