import { FC } from "react"
import { Button, theme } from "@nextui-org/react"

import useThemeSwitcher from "src/hooks/use-theme-switcher"
import { useIsBrowser } from "src/hooks/use-is-browser"
import { HiMoon, HiSun } from "src/components/common/icons/hero-icon"

const ThemeSwitcherButton: FC = () => {
  const { switchTheme, resolvedTheme } = useThemeSwitcher()
  const isBrowser = useIsBrowser()
  if (isBrowser === false) return null

  return (
    <Button
      rounded
      light
      auto
      icon={resolvedTheme === "dark" ? <HiMoon /> : <HiSun />}
      onPress={switchTheme}
      css={{
        fontSize: theme.fontSizes["2xl"],
      }}
    />
  )
}

export default ThemeSwitcherButton
