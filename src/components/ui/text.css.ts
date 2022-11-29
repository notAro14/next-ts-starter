import { recipe } from "@vanilla-extract/recipes"
import { vars } from "src/styles/theme/index.css"

export const text = recipe({
  base: {
    color: vars.colors.gray["text-hi"],
  },
})
