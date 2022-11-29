import { style } from "@vanilla-extract/css"
import { vars } from "src/styles/theme/index.css"

export const link = style({
  color: vars.colors.brand["text-lo"],
})

export const main = style({
  backgroundColor: vars.colors.brand.bg,
  fontFamily: vars.fonts.sans,
  minHeight: "100%",
})

export const nav = style({
  backgroundColor: vars.colors.brand.bg,
  fontFamily: vars.fonts.sans,
  position: "sticky",
  top: 0,
  zIndex: 1,
})

export const navbar = style({
  listStyleType: "none",
  selectors: {
    [`${nav} &`]: {
      display: "flex",
      gap: vars.space.md,
    },
  },
})
