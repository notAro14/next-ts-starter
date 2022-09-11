import { styled, theme } from "src/theme/stitches.config"

export const Container = styled("header", {
  display: "grid",
  placeItems: "center",
  height: 75,
  padding: `0 ${theme.space.lg}`,
  position: "sticky",
  top: theme.space.lg,
  marginBottom: theme.space.lg,
})

export const Nav = styled("nav", {
  backgroundColor: theme.colors["bg-transparent"],
  backdropFilter: "blur(10px)",
  borderRadius: theme.radii.md,
  border: "1px solid",
  borderColor: theme.colors["border-subtle"],
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: theme.space.sm,
  width: "100%",
  height: "100%",
  boxShadow: theme.shadows.low,
})
