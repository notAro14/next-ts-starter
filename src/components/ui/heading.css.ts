import { recipe } from "@vanilla-extract/recipes"
import { vars } from "src/styles/theme/index.css"

export const heading = recipe({
  variants: {
    color: {
      vibrant: {
        color: vars.colors.brand["text-lo"],
      },
      functional: {
        color: vars.colors.brand["text-hi"],
      },
    },
  },
  defaultVariants: {
    color: "functional",
  },
})
