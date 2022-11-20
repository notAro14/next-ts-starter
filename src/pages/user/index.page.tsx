import Head from "next/head"
import type { NextPage } from "next"

import ViewUsers from "./components/view-users"

const ViewUsersPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Users</title>
      </Head>
      <ViewUsers />
    </>
  )
}

export default ViewUsersPage
