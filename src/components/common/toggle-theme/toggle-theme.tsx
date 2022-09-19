import { FC } from "react"
import { SunIcon, MoonIcon } from "@radix-ui/react-icons"

import IconButton from "src/components/common/icon-button"
import useThemeSwitcher from "src/hooks/use-theme-switcher"
import { useIsBrowser } from "src/hooks/use-is-browser"

const ToggleTheme: FC = () => {
  const { switchTheme, resolvedTheme } = useThemeSwitcher()
  const isBrowser = useIsBrowser()
  if (isBrowser === false) return null

  return (
    <IconButton variant="ghost" onClick={switchTheme}>
      {resolvedTheme === "light" && <SunIcon />}
      {resolvedTheme === "dark" && <MoonIcon />}
    </IconButton>
  )
}

export default ToggleTheme
