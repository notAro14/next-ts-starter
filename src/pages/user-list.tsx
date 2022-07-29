import type { NextPage } from "next"
import Head from "next/head"
import UserList from "src/features/user-list"
import Box from "src/ui-kit/box"

const UserListPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>User List</title>
      </Head>
      <Box as="main">
        <UserList />
      </Box>
    </>
  )
}

export default UserListPage
