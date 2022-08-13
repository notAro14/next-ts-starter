import { FC, ReactNode } from "react"

import { styled } from "src/ui/stitches.config"
import SelectTheme from "src/features/select-theme"

const StyledSelectTheme = styled(SelectTheme, {
  alignSelf: "flex-end",
})

const appBgDefault = "$$app-bg-default"

const StyledLayout = styled("div", {
  [appBgDefault]: "$colors$semantic-bg",

  backgroundColor: appBgDefault,
  minHeight: "100%",
  padding: "$md",
  display: "flex",
  flexDirection: "column",
  gap: "$md",
})

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <StyledLayout>
      <StyledSelectTheme />
      {children}
    </StyledLayout>
  )
}

export default Layout
