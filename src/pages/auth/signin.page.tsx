import { signIn } from "next-auth/react"
import { useRouter } from "next/router"
import { FC, useRef } from "react"

import Button from "src/components/common/button"
import Flex from "src/components/common/flex"
import Heading from "src/components/common/heading"
import SEO from "src/components/common/seo"
import Text from "src/components/common/text"
import ToggleTheme from "src/components/common/toggle-theme"
import { styled, theme } from "src/styles/theme/stitches.config"
import type { NextPageWithLayout } from "src/types/next"
import { THEMES } from "src/styles/theme"

const StyledForm = styled("form", {
  display: "flex",
  flexDirection: "column",
  gap: theme.space.xl,
  fontFamily: theme.fonts.sans,
})
const StyledLabel = styled("label", {
  color: theme.colors["text-functional"],
  fontSize: theme.fontSizes.sm,
  textTransform: "uppercase",
})
const StyledInput = styled("input", {
  padding: theme.space.sm,
  backgroundColor: theme.colors.bg,
  border: "none",
  boxShadow: "inset 0 2px 6px hsla(0deg, 0%, 0%, 0.2)",
  color: theme.colors["text-functional"],
  borderRadius: theme.radii.md,
  "&::placeholder": {
    color: theme.colors["text-functional-low"],
    fontSize: theme.fontSizes.sm,
    fontWeight: theme.fontWeights.light,
  },
  [`.${THEMES.dark} &`]: {
    boxShadow: "unset",
    border: "1px solid",
    borderColor: theme.colors["border-gray"],
  },
})

const EmailSignIn: FC<{ callbackUrl?: string }> = ({ callbackUrl }) => {
  const emailRef = useRef<HTMLInputElement | null>(null)
  return (
    <StyledForm
      onSubmit={async (evt) => {
        evt.preventDefault()
        return signIn("email", {
          email: emailRef.current?.value,
          callbackUrl,
        })
      }}
    >
      <Flex direction="column" gap="xxs">
        <StyledLabel htmlFor="email">Email</StyledLabel>
        <StyledInput
          placeholder="We won't spam you 😁"
          type="email"
          ref={emailRef}
          id="email"
        />
      </Flex>
      <Button colorScheme="accent">Sign in with Email</Button>
    </StyledForm>
  )
}

const SignIn: NextPageWithLayout = () => {
  const { callbackUrl } = useRouter().query as {
    callbackUrl?: string
  }

  return (
    <>
      <SEO title="Sign In" />
      <Flex
        direction="column"
        gap="2xl"
        css={{
          borderRadius: theme.radii.lg,
          padding: theme.space.xl,
          border: "1px solid",
          borderColor: theme.colors["border-gray"],
          boxShadow: theme.shadows.low,
        }}
      >
        <Heading
          variant="h1"
          vibrant
          css={{
            textAlign: "center",
          }}
        >
          Next TS Starter
        </Heading>
        <ToggleTheme
          css={{
            position: "absolute",
            top: 15,
            right: 15,
          }}
        />
        <Flex direction="column" gap="xl">
          <EmailSignIn callbackUrl={callbackUrl} />
          <Text
            as="small"
            fontSize="sm"
            css={{
              textAlign: "center",
            }}
          >
            or
          </Text>
          <Button
            variant="outlined"
            colorScheme="accent"
            fullWidth
            onClick={() => signIn("github", { callbackUrl })}
          >
            Sign in with Github
          </Button>
        </Flex>
      </Flex>
    </>
  )
}

const Layout = styled("section", {
  display: "grid",
  placeItems: "center",
  minHeight: "100%",
  backgroundColor: theme.colors.bg,
})
SignIn.getLayout = (page) => <Layout>{page}</Layout>

export default SignIn
