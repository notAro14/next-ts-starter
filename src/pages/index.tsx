// PACKAGES
import Head from "next/head"
// TYPES & CONSTANTS
import type { NextPageWithLayout } from "src/types"
// COMPONENTS
import Heading from "src/ui-kit/heading"
import Button from "src/ui-kit/button"
import Flex from "src/ui-kit/flex"
import Text from "src/ui-kit/text"
import SwitchTheme from "src/features/switch-theme"
import Box from "src/ui-kit/box"

const IndexPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Next Typescript starter code</title>
      </Head>
      <Box as="main">
        <Heading as="h1" css={{ fontSize: "$4xl" }}>
          Next Typescript Starter Code
        </Heading>
        <Text size="lg">
          This is a next.js starter code I use to bootstrap quickly a react
          project
        </Text>
        <Heading as="h2" css={{ fontSize: "$3xl" }}>
          Shared UI Kit
        </Heading>
        <Text size="lg">Ready to use UI components</Text>
        <Flex>
          <SwitchTheme />
          <Button variant="outline">Outline button</Button>
        </Flex>
        <Flex
          direction="column"
          css={{
            lineHeight: 1,
          }}
        >
          <Text size="4xl">A visual type scale</Text>
          <Text size="3xl">A visual type scale</Text>
          <Text size="2xl">A visual type scale</Text>
          <Text size="xl">A visual type scale</Text>
          <Text size="lg">A visual type scale</Text>
          <Text>A visual type scale</Text>
          <Text size="sm">A visual type scale</Text>
        </Flex>
      </Box>
    </>
  )
}

export default IndexPage
