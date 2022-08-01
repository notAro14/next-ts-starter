import { plum, tomato, mauve } from "@radix-ui/colors"

import { createTheme } from "src/ui/stitches.config"
const lightTheme = createTheme("light-theme", {
  colors: {
    ...plum,
    ...tomato,
    ...mauve,
    "semantic-shadow": "280deg 25% 63%",
  },
})

export const light = lightTheme.className
export default lightTheme.className
