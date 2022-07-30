import { useTheme } from "next-themes"

import Button from "src/ui/button"

const SwitchTheme = () => {
  const { theme, setTheme } = useTheme()
  const switchTheme = () => {
    let nextTheme = ""
    switch (theme) {
      case "dark":
        nextTheme = "light"
        break
      case "light":
        nextTheme = "dark"
        break
      case "system":
        nextTheme = "light"
        break
      default:
        nextTheme = "system"
    }
    setTheme(nextTheme)
  }
  return <Button onClick={() => switchTheme()}>Switch theme</Button>
}

export default SwitchTheme
