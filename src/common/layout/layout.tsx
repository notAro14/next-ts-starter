import type { FC } from "react"

import { styled, theme } from "src/theme/stitches.config"

import Footer from "src/common/footer"
import Header from "src/common/header"

const AppWrapper = styled("section", {
  display: "flex",
  flexDirection: "column",
  minHeight: "100%",
  backgroundColor: theme.colors.bg,
})

const MainWrapper = styled("main", {
  padding: theme.space.lg,
})

interface Props {
  children: JSX.Element
}
const PublicLayout: FC<Props> = ({ children }) => {
  return (
    <AppWrapper>
      <Header />
      <MainWrapper>{children}</MainWrapper>
      <Footer />
    </AppWrapper>
  )
}

export default PublicLayout
