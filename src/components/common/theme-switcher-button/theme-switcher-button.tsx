import { FC } from "react"

import IconButton from "src/components/common/icon-button"
import { HiMoon, HiSun } from "src/components/common/icons/hero-icon"
import useThemeSwitcher from "src/hooks/use-theme-switcher"
import { useIsBrowser } from "src/hooks/use-is-browser"

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
