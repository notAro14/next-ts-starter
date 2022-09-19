import type { FC } from "react"
import { Text } from "@nextui-org/react"

import SEO from "src/components/common/seo"

const IndexPage: FC = () => {
  return (
    <>
      <SEO title="Next TS starter" />
      <Text h1>Next TS starter code</Text>
      <Text size="$lg">
        Bootstrap quickly a Next TS project with this starter
      </Text>
    </>
  )
}

export default IndexPage
