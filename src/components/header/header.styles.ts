import { styled, theme } from "src/styles/theme/stitches.config"

export const Container = styled("header", {
  display: "grid",
  placeItems: "center",
  height: 75,
  padding: `0 ${theme.space.lg}`,
  position: "sticky",
  top: theme.space.xs,
  marginBottom: theme.space.lg,
})

export const Nav = styled("nav", {
  backgroundColor: theme.colors["bg-transparent"],
  backdropFilter: "blur(10px)",
  borderRadius: theme.radii.lg,
  border: "1px solid",
  borderColor: theme.colors["border-subtle"],
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: theme.space.lg,
  width: "100%",
  height: "100%",
  boxShadow: theme.shadows.low,
})
