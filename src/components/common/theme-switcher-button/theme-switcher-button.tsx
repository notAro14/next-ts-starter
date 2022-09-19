import { FC } from "react"
import { Button } from "@nextui-org/react"
import { SunIcon, MoonIcon } from "@radix-ui/react-icons"

import useThemeSwitcher from "src/hooks/use-theme-switcher"
import { useIsBrowser } from "src/hooks/use-is-browser"

const ThemeSwitcherButton: FC = () => {
  const { switchTheme, resolvedTheme } = useThemeSwitcher()
  const isBrowser = useIsBrowser()
  if (isBrowser === false) return null

  return (
    <Button
      rounded
      flat
      color="gradient"
      auto
      icon={resolvedTheme === "dark" ? <MoonIcon /> : <SunIcon />}
      onPress={switchTheme}
      title="Toogle theme"
    />
  )
}

export default ThemeSwitcherButton
