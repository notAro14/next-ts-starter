import { recipe } from "@vanilla-extract/recipes"
import { vars } from "src/styles/theme/index.css"

export const link = recipe({
  base: {
    color: vars.colors.brand["text-lo"],
  },
})
