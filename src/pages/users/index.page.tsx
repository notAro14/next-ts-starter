import Head from "next/head"

import ViewUsers from "./ViewUsers"

export default function Page() {
  return (
    <>
      <Head>
        <title>Users</title>
      </Head>
      <ViewUsers />
    </>
  )
}
