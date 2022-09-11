import type { NextPageWithLayout } from "src/types"

import Heading from "src/ui/heading"

import SEO from "src/common/seo"

import Text from "src/ui/text"
import ThemeSelect from "src/common/theme-select"

const HomePage: NextPageWithLayout = () => {
  return (
    <>
      <SEO title="Next TS starter code" />

      <Heading as="h1" variant="h1">
        Next TS starter code
      </Heading>
      <Text>Bootstrap quickly a Next TS project with this starter</Text>
      <ThemeSelect />
    </>
  )
}

export default HomePage
