import type { FC, ReactNode } from "react"

import Button, { ButtonVariants } from "src/ui/button"

import useThemeSwitcher from "src/utils/hooks/use-theme-switcher"

interface Props extends ButtonVariants {
  children: ReactNode
}

const ThemeSwitcher: FC<Props> = ({ children, ...rest }) => {
  const switchTheme = useThemeSwitcher()
  return (
    <Button onClick={switchTheme} {...rest}>
      {children}
    </Button>
  )
}

export default ThemeSwitcher
