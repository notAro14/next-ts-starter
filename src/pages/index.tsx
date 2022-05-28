// PACKAGES
import Head from "next/head"
// TYPES & CONSTANTS
import type { NextPageWithLayout } from "src/types"
// COMPONENTS
import Heading from "src/shared/heading"

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
      </main>
    </>
  )
}

export default IndexPage
