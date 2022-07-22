// PACKAGES
import Head from "next/head"
import { useTheme } from "next-themes"
// TYPES & CONSTANTS
import type { NextPageWithLayout } from "src/types"
// COMPONENTS
import Heading from "src/ui-kit/heading"
// FUNCTIONS
import { styled } from "src/ui-kit/stitches.config"
import Button from "src/ui-kit/button"
import Flex from "src/ui-kit/flex"
import Text from "src/ui-kit/text"

const IndexPage: NextPageWithLayout = () => {
  //const [isDark, toggle] = useReducer((state) => !state, false)
  const { theme, setTheme } = useTheme()
  const switchTheme = () => {
    let nextTheme = ""
    switch (theme) {
      case "dark":
        nextTheme = "light"
        break
      case "light":
        nextTheme = "dark"
        break
      case "system":
        nextTheme = "light"
        break
      default:
        nextTheme = "system"
    }
    setTheme(nextTheme)
  }
  return (
    <>
      <Head>
        <title>Next starter code</title>
      </Head>

      <Flex as="main" direction="column" gap="4">
        <Heading as="h1" css={{ fontSize: "$4xl" }}>
          Next Typescript Starter
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
          <Button onClick={() => switchTheme()}>Switch theme</Button>
          <Button variant="outline" onClick={() => switchTheme()}>
            Switch theme
          </Button>
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
      </Flex>
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
