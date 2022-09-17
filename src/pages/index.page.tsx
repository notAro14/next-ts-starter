import type { FC } from "react"

import SEO from "src/components/common/seo"
import Heading from "src/components/common/heading"
import Text from "src/components/common/text"
import ThemeSelect from "src/components/common/theme-select"

const IndexPage: FC = () => {
  return (
    <>
      <SEO title="Next TS starter" />
      <Heading as="h1" variant="h1">
        Next TS starter code
      </Heading>
      <Text>Bootstrap quickly a Next TS project with this starter</Text>
      <ThemeSelect />
    </>
  )
}

export default IndexPage
