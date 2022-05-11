// PACKAGES
import Head from "next/head"
// TYPES & CONSTANTS
import type { NextPageWithLayout } from "src/types"
// COMPONENTS
import Hello from "src/components/hello"
import Heading from "src/shared/heading"

const IndexPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Next starter code</title>
      </Head>

      <main>
        <Heading as="h1" css={{ marginBottom: "$base" }}>
          Next Typescript Starter
        </Heading>
        <Hello />
      </main>
    </>
  )
}

export default IndexPage
