import { styled, theme } from "src/styles/theme/stitches.config"

export const Container = styled("footer", {
  marginTop: "auto",
  backgroundColor: theme.colors.bg,
  display: "grid",
  placeItems: "center",
  height: 100,
  borderTop: "1px solid",
  borderTopColor: theme.colors["border-gray"],
})
