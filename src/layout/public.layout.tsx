import type { FC } from "react"

import { Container, styled } from "@nextui-org/react"

import Footer from "src/components/footer"
import Header from "src/components/header"

const AppWrapper = styled("section", {
  display: "flex",
  flexDirection: "column",
  minHeight: "100%",
  backgroundColor: "$background",
})

interface Props {
  children: JSX.Element
}
export const PublicLayout: FC<Props> = ({ children }) => {
  return (
    <AppWrapper>
      <Header />
      <Container fluid>{children}</Container>
      <Footer />
    </AppWrapper>
  )
}

export default PublicLayout
