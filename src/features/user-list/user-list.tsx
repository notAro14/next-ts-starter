import { useQuery } from "@tanstack/react-query"
import Flex from "src/ui/flex"
import Heading from "src/ui/heading"

import Paper from "src/ui/paper"
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
        users.map(({ id, username, phone, email }) => (
          <Paper
            as="li"
            key={id}
            css={{
              height: "fit-content",
              display: "flex",
              flexDirection: "column",
              gap: "$lg",
            }}
          >
            <Heading as="h2" vibrant>
              {username}
            </Heading>
            <Flex direction="column">
              <Text
                as="small"
                css={{
                  color: "$semantic-text-lo-gray",
                }}
              >
                {phone}
              </Text>
              <Text
                as="small"
                css={{
                  color: "$semantic-text-lo-gray",
                }}
              >
                {email}
              </Text>
            </Flex>
          </Paper>
        ))}
    </>
  )
}

export default UserList
