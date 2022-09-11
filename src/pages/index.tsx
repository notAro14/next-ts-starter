import type { NextPageWithLayout } from "src/types"

import Heading from "src/ui/heading"

import SEO from "src/common/seo"

import ThemeSwitcher from "src/common/theme-switcher"
import Text from "src/ui/text"

const HomePage: NextPageWithLayout = () => {
  return (
    <>
      <SEO title="Next TS starter code" />

      <Heading as="h1" variant="h1">
        Next TS starter code
      </Heading>
      <Text>Bootstrap quickly a Next TS project with this starter</Text>
      <ThemeSwitcher size="small" variant="outline">
        Change theme
      </ThemeSwitcher>
    </>
  )
}

export default HomePage
