// PACKAGES
import Head from "next/head"
// TYPES & CONSTANTS
import type { NextPageWithLayout } from "src/types"
// COMPONENTS
import Heading from "src/ui-kit/heading"
import UserList from "src/features/user-list"
// FUNCTIONS
import { styled } from "src/ui-kit/stitches.config"

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

const Layout = styled("div", {
  backgroundColor: "$bg-app",
  minHeight: "100%",
  padding: "$base",
})

IndexPage.getLayout = (page) => {
  return <Layout>{page}</Layout>
}

export default IndexPage
