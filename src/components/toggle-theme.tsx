import { MoonIcon, SunIcon } from "@radix-ui/react-icons"

import useThemeSwitcher from "src/hooks/use-theme-switcher"
import { useIsBrowser } from "src/hooks/use-is-browser"

export default function ToggleTheme() {
  const { toggle, resolvedTheme } = useThemeSwitcher()
  const isBrowser = useIsBrowser()
  if (isBrowser === false) return null

  return (
    <button onClick={toggle}>
      {resolvedTheme === "light" && <SunIcon />}
      {resolvedTheme === "dark" && <MoonIcon />}
    </button>
  )
}
