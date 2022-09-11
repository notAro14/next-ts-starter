import type { FC } from "react"

import { styled, theme } from "src/theme/stitches.config"
import Box from "src/ui/box"
import Link from "src/ui/link"
import Text from "src/ui/text"

import ThemeSelect from "src/common/theme-select"

const AppWrapper = styled("section", {
  display: "flex",
  flexDirection: "column",
  minHeight: "100%",
  backgroundColor: theme.colors.bg,
  /*
    make the footer positioned at the bottom
    regardless of main content height
  */
  "& > footer": {
    marginTop: "auto",
  },
})

const Footer = () => (
  <Box as="footer">
    <Text lineHeight="xxs">
      Made by <Link href="htpps://github.com/notAro14">Aro Andriamaro</Link>
    </Text>
  </Box>
)
const Header = () => (
  <header>
    <nav>
      <ThemeSelect />
    </nav>
  </header>
)

interface Props {
  children: JSX.Element
}
const PublicLayout: FC<Props> = ({ children }) => {
  return (
    <AppWrapper>
      <Header />
      {children}
      <Footer />
    </AppWrapper>
  )
}

export default PublicLayout
