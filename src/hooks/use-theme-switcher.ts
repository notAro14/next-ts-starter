import { useTheme } from "next-themes"
import { useCallback } from "react"

const themeMachine = {
  states: {
    light: {
      on: {
        TOGGLE: {
          target: "dark",
        },
      },
    },
    dark: {
      on: {
        TOGGLE: {
          target: "light",
        },
      },
    },
  },
} as const
type Theme = "light" | "dark" | undefined
const themeReducer = (prev: Theme) => {
  if (typeof prev === "undefined") return "system"
  return themeMachine.states[prev].on.TOGGLE.target ?? "system"
}

export default function useThemeSwitcher() {
  const { theme, setTheme, resolvedTheme } = useTheme()

  const toggle = useCallback(
    () => setTheme(themeReducer(resolvedTheme as Theme)),
    [resolvedTheme, setTheme]
  )
  return { toggle, theme, resolvedTheme }
}
