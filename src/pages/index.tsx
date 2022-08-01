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

const TEXT_VALUE = "Hello World"
const TEXT_SIZES = ["sm", "md", "lg", "xl", "2xl", "3xl", "4xl"] as const

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
            {TEXT_SIZES.map((size) => (
              <Text key={size} size={size}>
                {TEXT_VALUE}
              </Text>
            ))}
          </Flex>
        </Section>
      </Box>
    </>
  )
}

export default IndexPage
