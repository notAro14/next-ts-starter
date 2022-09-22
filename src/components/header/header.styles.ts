import { styled, theme } from "src/styles/theme/stitches.config"

export const Container = styled("header", {
  display: "grid",
  placeItems: "center",
  height: 100,
  padding: `0 ${theme.space.lg}`,
  position: "sticky",
  top: theme.space.xs,
  marginBottom: theme.space.lg,
  "@sm": {
    margin: "0 auto",
    width: 500,
    padding: "unset",
  },
})

export const Nav = styled("nav", {
  backgroundColor: theme.colors["bg-transparent"],
  backdropFilter: "blur(10px)",
  borderRadius: theme.radii.lg,
  border: "1px solid",
  borderColor: theme.colors["border-gray"],
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-around",
  padding: theme.space.xxs,
  width: "100%",
  height: "100%",
  boxShadow: theme.shadows.low,
  "@sm": {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: theme.space.md,
  },
})
