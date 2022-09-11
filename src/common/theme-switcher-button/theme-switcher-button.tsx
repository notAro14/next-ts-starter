import { FC } from "react"

import IconButton from "src/ui/icon-button"
import { HiMoon, HiSun } from "src/icons/hero-icon"
import useThemeSwitcher from "src/utils/hooks/use-theme-switcher"
import { useIsBrowser } from "src/utils/hooks/use-is-browser"

const ThemeSwitcherButton: FC = () => {
  const { switchTheme, resolvedTheme } = useThemeSwitcher()
  const isBrowser = useIsBrowser()
  if (isBrowser === false) return null

  return (
    <IconButton variant="ghost" onClick={switchTheme}>
      {resolvedTheme === "light" && <HiSun />}
      {resolvedTheme === "dark" && <HiMoon />}
    </IconButton>
  )
}

export default ThemeSwitcherButton
