import type { FC } from "react"

import SEO from "src/components/common/seo"
import Heading from "src/components/common/heading"
import Text from "src/components/common/text"
import { theme } from "src/styles/theme/stitches.config"

const IndexPage: FC = () => {
  return (
    <>
      <SEO title="Next TS starter" />
      <Heading
        as="h1"
        variant="h1"
        css={{
          marginBottom: theme.space.md,
        }}
      >
        Next TS starter code
      </Heading>
      <Text paragraph fontSize="lg">
        Bootstrap quickly a Next TS project with this starter
      </Text>
    </>
  )
}

export default IndexPage
