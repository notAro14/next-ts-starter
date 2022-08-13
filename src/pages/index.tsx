// VENDORS
import { ReactNode } from "react"
// TYPES
import type { NextPageWithLayout } from "src/types"
// COMPONENTS
import Heading from "src/ui/heading"
import Button from "src/ui/button"
import Flex from "src/ui/flex"
import Text from "src/ui/text"
import Paper from "src/ui/paper"
import Box from "src/ui/box"
import SEO from "src/components/seo"
import Link from "src/ui/link"
import Ring from "src/ui/ring"
import Momentum from "src/ui/momentum"
import { Input, Label, FormControl } from "src/ui/input"
// FUNCTIONS
import { styled } from "src/ui/stitches.config"
import useThemeSwitcher from "src/utils/hooks/use-theme-switcher"

const TEXT_VALUE = "Hello World"
const TEXT_SIZES = ["sm", "md", "lg", "xl", "2xl", "3xl", "4xl"] as const
const PAPER_ELEVATIONS = ["low", "medium", "high"] as const

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
  const switchTheme = useThemeSwitcher()
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
            <Button onClick={switchTheme}>Filled</Button>
            <Button onClick={switchTheme} variant="outline">
              Outline
            </Button>
          </Flex>
          <Flex gap="4" css={{ alignItems: "flex-end" }}>
            <Button onClick={switchTheme} size="small">
              Filled
            </Button>
            <Button onClick={switchTheme} size="small" variant="outline">
              Outline
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
        <Section title="Paper (elevation on light mode)">
          <Flex
            gap="4"
            css={{
              flexWrap: "wrap",
              $$size: "100px",
            }}
          >
            {PAPER_ELEVATIONS.map((elevation) => (
              <Paper
                key={elevation}
                elevation={elevation}
                css={{
                  minWidth: "$$size",
                  height: "$$size",
                  display: "grid",
                  placeItems: "center",
                }}
              >
                <Text>{elevation}</Text>
              </Paper>
            ))}
          </Flex>
        </Section>
        <Section title="Paper Skeleton">
          <Paper
            css={{
              height: 100,
              "@md": {
                maxWidth: "50%",
              },
              "@lg": {
                maxWidth: "30%",
              },
            }}
            loading
          />
        </Section>
        <Section title="Loaders">
          <Flex css={{ alignItems: "center" }} gap={6}>
            <Ring size="sm" />
            <Ring size="md" />
            <Ring size="lg" />
          </Flex>
          <Flex css={{ alignItems: "center" }} gap={6}>
            <Momentum size="sm" />
            <Momentum size="md" />
            <Momentum size="lg" />
          </Flex>
        </Section>
        <Section title="Forms">
          <form onSubmit={(evt) => evt.preventDefault()}>
            <Paper
              css={{
                display: "flex",
                flexDirection: "column",
                gap: "$md",
                padding: "$md",
                "@sm": {
                  width: "100%",
                },
                "@md": {
                  maxWidth: 400,
                },
                "@lg": {
                  maxWidth: 400,
                },
              }}
            >
              <FormControl>
                <Label htmlFor="email">Email</Label>
                <Input defaultValue="aro@mail.com" type="email" id="email" />
              </FormControl>
              <FormControl>
                <Label htmlFor="pwd">Password</Label>
                <Input defaultValue="123" type="password" id="pwd" />
              </FormControl>
              <Button type="submit" variant="outline">
                Sign In
              </Button>
              <Button>Sign Up</Button>
            </Paper>
          </form>
        </Section>
      </Box>
    </>
  )
}

export default IndexPage
