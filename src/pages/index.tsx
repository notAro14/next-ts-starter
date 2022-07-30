// TYPES
import type { NextPageWithLayout } from "src/types"
// COMPONENTS
import Heading from "src/ui/heading"
import Button from "src/ui/button"
import Flex from "src/ui/flex"
import Text from "src/ui/text"
import SwitchTheme from "src/features/switch-theme"
import Box from "src/ui/box"
import SEO from "src/components/seo"

const IndexPage: NextPageWithLayout = () => {
  return (
    <>
      <SEO>Next Typescript starter code</SEO>

      <Box as="main">
        <Flex
          direction="column"
          gap="3"
          as="section"
          css={{ marginBottom: "$lg" }}
        >
          <Heading as="h1" css={{ fontSize: "$2xl" }}>
            Next Typescript Starter Code
          </Heading>
          <Text>
            This is a next.js starter code I use to bootstrap quickly a react
            project
          </Text>
        </Flex>
        <Flex
          direction="column"
          gap="3"
          as="section"
          css={{ marginBottom: "$lg" }}
        >
          <Heading as="h2" css={{ fontSize: "$xl" }}>
            UI Kit
          </Heading>
          <Text>Ready to use UI components</Text>
        </Flex>
        <Flex
          direction="column"
          gap="3"
          as="section"
          css={{ marginBottom: "$lg" }}
        >
          <Heading as="h3" css={{ fontSize: "$lg" }}>
            Button
          </Heading>
          <Flex gap="4" css={{ alignItems: "flex-end" }}>
            <SwitchTheme />
            <Button variant="outline">Outline button</Button>
            <Button size="small">Small Filled</Button>
            <Button size="small" variant="outline">
              Small Outline
            </Button>
          </Flex>
        </Flex>
        <Flex gap="3" direction="column" as="section">
          <Heading as="h3" css={{ fontSize: "$lg" }}>
            Text
          </Heading>

          <Flex
            direction="column"
            css={{
              lineHeight: 1,
            }}
          >
            <Text size="sm">A visual type scale</Text>
            <Text>A visual type scale</Text>
            <Text size="lg">A visual type scale</Text>
            <Text size="xl">A visual type scale</Text>
            <Text size="2xl">A visual type scale</Text>
            <Text size="3xl">A visual type scale</Text>
            <Text size="4xl">A visual type scale</Text>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}

export default IndexPage
