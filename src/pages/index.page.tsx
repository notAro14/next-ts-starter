import type { FC } from "react"
import { Title, Text } from "@mantine/core"

import SEO from "src/components/common/seo"

const IndexPage: FC = () => {
  return (
    <>
      <SEO title="Next TS starter" />
      <Title order={1}>Next TS starter code</Title>
      <Text size="lg">
        Bootstrap quickly a Next TS project with this starter
      </Text>
    </>
  )
}

export default IndexPage
