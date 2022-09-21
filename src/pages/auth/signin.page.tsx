import type { InferGetServerSidePropsType } from "next"
import { getProviders, signIn } from "next-auth/react"
import { useRouter } from "next/router"

import Button from "src/components/common/button"
import Flex from "src/components/common/flex"
import Heading from "src/components/common/heading"
import SEO from "src/components/common/seo"

const SignIn = ({
  providers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { callbackUrl } = useRouter().query as {
    callbackUrl?: string
  }
  if (providers === null) return null
  return (
    <>
      <SEO title="Sign In" />
      <Flex direction="column" gap="md" align="center">
        <Heading variant="h1" vibrant>
          Next TS Starter
        </Heading>
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <Button
              variant="outline"
              onClick={() => signIn(provider.id, { callbackUrl })}
            >
              Sign in with {provider.name}
            </Button>
          </div>
        ))}
      </Flex>
    </>
  )
}

export default SignIn

export const getServerSideProps = async () => {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}
