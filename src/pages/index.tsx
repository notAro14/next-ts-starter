// PACKAGES
import Head from "next/head"
// TYPES & CONSTANTS
import type { NextPageWithLayout } from "src/types"
// COMPONENTS
import Heading from "src/ui-kit/heading"
import UserList from "src/features/user-list"
// FUNCTIONS
import { styled } from "src/ui-kit/stitches.config"
import Button from "src/ui-kit/button"
import Flex from "src/ui-kit/flex"

const IndexPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Next starter code</title>
      </Head>

      <main>
        <Heading as="h1">Next Typescript Starter</Heading>
        <Heading as="h2" css={{ marginTop: "$lg" }}>
          List of users from API
        </Heading>
        <UserList />
        <Heading as="h2" css={{ marginTop: "$lg" }}>
          Shared UI Kit
        </Heading>
        <Flex css={{ marginTop: "$md" }} gap="4">
          <Button>Filled</Button>
          <Button variant="outline">Outlined</Button>
        </Flex>
        <Flex
          direction="column"
          css={{ marginTop: "$md", alignItems: "flex-start" }}
          gap="4"
        >
          <Button>Very long text on button element</Button>
          <Button variant="outline">Very long text on button element</Button>
        </Flex>
      </main>
    </>
  )
}

const Layout = styled("div", {
  backgroundColor: "$component-app-bg-default",
  minHeight: "100%",
  padding: "$md",
})

IndexPage.getLayout = (page) => {
  return <Layout>{page}</Layout>
}

export default IndexPage
