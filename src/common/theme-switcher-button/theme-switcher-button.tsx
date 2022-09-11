import { useEffect, FC } from "react"

import useEnableOnce from "src/utils/hooks/use-enable-once"
import IconButton from "src/ui/icon-button"
import { HiMoon, HiSun } from "src/icons/hero-icon"
import useThemeSwitcher from "src/utils/hooks/use-theme-switcher"

const ThemeSwitcherButton: FC = () => {
  const [isEnable, enableOnce] = useEnableOnce()
  const { switchTheme, resolvedTheme } = useThemeSwitcher()

  useEffect(() => {
    enableOnce()
  }, [enableOnce])
  if (isEnable === false) return null

  return (
    <IconButton variant="ghost" onClick={switchTheme}>
      {resolvedTheme === "light" && <HiMoon />}
      {resolvedTheme === "dark" && <HiSun />}
    </IconButton>
  )
}

export default ThemeSwitcherButton
