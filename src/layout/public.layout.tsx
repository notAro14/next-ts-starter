import type { FC } from "react"

import { styled, theme } from "src/styles/theme/stitches.config"

import Footer from "src/components/footer"
import Header from "src/components/header"

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
export const PublicLayout: FC<Props> = ({ children }) => {
  return (
    <AppWrapper>
      <Header />
      <MainWrapper>{children}</MainWrapper>
      <Footer />
    </AppWrapper>
  )
}

export default PublicLayout
