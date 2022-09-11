import type { FC } from "react"

import { styled, theme } from "src/theme/stitches.config"

import Footer from "../footer"
import ThemeSelect from "src/common/theme-select"

const AppWrapper = styled("section", {
  display: "flex",
  flexDirection: "column",
  minHeight: "100%",
  backgroundColor: theme.colors.bg,
})

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
