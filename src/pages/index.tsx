// VENDORS
import { ReactNode } from "react"
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
import Link from "src/ui/link"
import { styled } from "src/ui/stitches.config"

const StyledSection = styled("section", {
  display: "flex",
  flexDirection: "column",
  gap: "$sm",
  marginBottom: "$lg",
})

function Section({ children, title }: { children: ReactNode; title: string }) {
  return (
    <StyledSection>
      <Heading as="h2" css={{ fontSize: "$lg" }}>
        {title}
      </Heading>
      {children}
    </StyledSection>
  )
}

const IndexPage: NextPageWithLayout = () => {
  return (
    <>
      <SEO>Next Typescript starter code</SEO>

      <Box as="main">
        <StyledSection>
          <Heading as="h1" css={{ fontSize: "$2xl" }}>
            Next Typescript Starter Code
          </Heading>
          <Text>
            This is a next.js starter code I use to bootstrap quickly a react
            project
          </Text>
        </StyledSection>
        <Section title="UI kit">
          <Text>Ready to use UI components</Text>
        </Section>
        <Section title="Button">
          <Flex gap="4" css={{ alignItems: "flex-end" }}>
            <SwitchTheme />
            <Button variant="outline">Outline button</Button>
            <Button size="small">Small Filled</Button>
            <Button size="small" variant="outline">
              Small Outline
            </Button>
          </Flex>
        </Section>
        <Section title="Link">
          <Link href="/user-list">Go to user list page</Link>
        </Section>
        <Section title="Text">
          <Flex
            direction="column"
            css={{
              lineHeight: 1,
            }}
          >
            <Text size="sm">A visual type scale sm</Text>
            <Text>A visual type scale md</Text>
            <Text size="lg">A visual type scale lg</Text>
            <Text size="xl">A visual type scale xl</Text>
            <Text size="2xl">A visual type scale 2xl</Text>
            <Text size="3xl">A visual type scale 3xl</Text>
            <Text size="4xl">A visual type scale 4xl</Text>
          </Flex>
        </Section>
      </Box>
    </>
  )
}

export default IndexPage
