import type { NextPageWithLayout } from "src/types"

import Box from "src/ui/box"
import Heading from "src/ui/heading"

import SEO from "src/common/seo"

const HomePage: NextPageWithLayout = () => {
  return (
    <Box as="main">
      <SEO title="Next TS starter code" />

      <Heading as="h1" variant="h1">
        Next TS starter code
      </Heading>
    </Box>
  )
}

export default HomePage
