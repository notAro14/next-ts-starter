import { ThemeProvider } from "next-themes"
import type { ReactNode } from "react"
import {
  darkThemeClass as dark,
  lightThemeClass as light,
} from "src/styles/theme/index.css"

export default function StyleProvider({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      value={{ light, dark }}
    >
      {children}
    </ThemeProvider>
  )
}
