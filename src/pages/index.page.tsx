import type { FC } from "react"

import SEO from "src/components/common/seo"
import Heading from "src/components/common/heading"
import Text from "src/components/common/text"

const IndexPage: FC = () => {
  return (
    <>
      <SEO title="Next TS starter" />
      <Heading as="h1" variant="h1">
        Next TS starter code
      </Heading>
      <Text paragraph>
        Bootstrap quickly a Next TS project with this starter
      </Text>
    </>
  )
}

export default IndexPage
