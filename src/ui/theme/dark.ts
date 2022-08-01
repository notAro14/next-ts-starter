import { plumDark, tomatoDark, mauveDark } from "@radix-ui/colors"
import { createTheme } from "src/ui/stitches.config"

const darkTheme = createTheme("dark-theme", {
  colors: {
    ...plumDark,
    ...tomatoDark,
    ...mauveDark,
  },
})
export const dark = darkTheme.className
export default darkTheme.className
