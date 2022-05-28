// PACKAGES
import Head from "next/head"
// TYPES & CONSTANTS
import type { NextPageWithLayout } from "src/types"
// COMPONENTS
import Heading from "src/shared/heading"
import UserList from "src/components/user-list"

const IndexPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Next starter code</title>
      </Head>

      <main>
        <Heading as="h1" css={{ mb: "$base" }}>
          Next Typescript Starter
        </Heading>
        <UserList />
      </main>
    </>
  )
}

export default IndexPage
