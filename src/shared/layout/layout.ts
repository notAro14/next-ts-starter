import { styled } from "src/ui-kit/stitches.config"

const Layout = styled("div", {
  "$$component-app-bg-default": "$colors$semantic-bg",
  backgroundColor: "$$component-app-bg-default",
  minHeight: "100%",
  padding: "$md",
})

export default Layout
