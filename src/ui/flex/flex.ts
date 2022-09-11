import { styled, theme } from "src/theme/stitches.config"

const Flex = styled("div", {
  display: "flex",
  variants: {
    direction: {
      column: {
        flexDirection: "column",
      },
      row: {
        flexDirection: "row",
      },
    },
    gap: {
      xxs: {
        gap: theme.space.xxs,
      },
      xs: {
        gap: theme.space.xs,
      },
      sm: {
        gap: theme.space.sm,
      },
      md: {
        gap: theme.space.md,
      },
      lg: {
        gap: theme.space.lg,
      },
      xl: {
        gap: theme.space.xl,
      },
      "2xl": {
        gap: theme.space["2xl"],
      },
    },
    align: {
      center: {
        alignItems: "center",
      },
      start: {
        alignItems: "flex-start",
      },
      end: {
        alignItems: "flex-end",
      },
      baseline: {
        alignItems: "baseline",
      },
    },
    justify: {
      center: {
        justifyContent: "center",
      },
      start: {
        justifyContent: "flex-start",
      },
      end: {
        justifyContent: "flex-end",
      },
      "space-between": {
        justifyContent: "space-between",
      },
      "space-around": {
        justifyContent: "space-around",
      },
      "space-evenly": {
        justifyContent: "space-evenly",
      },
    },
    wrap: {
      true: {
        flexWrap: "wrap",
      },
    },
  },
  defaultVariants: {
    direction: "row",
  },
})

export default Flex
