import { plum, tomato, mauve } from "@radix-ui/colors"

import { createTheme } from "src/ui/stitches.config"
const lightTheme = createTheme("light-theme", {
  colors: {
    ...plum,
    ...tomato,
    ...mauve,
  },
})

export const light = lightTheme.className
export default lightTheme.className
