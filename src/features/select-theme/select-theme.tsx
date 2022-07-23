import { useTheme } from "next-themes"
import { useReducer, useEffect } from "react"
import Box from "src/ui-kit/box"

import Flex from "src/ui-kit/flex"
import Label from "src/ui-kit/label"
import Select from "src/ui-kit/select"

const SelectTheme = () => {
  const [mounted, toggleMounted] = useReducer(() => true, false)
  const { theme, setTheme, themes } = useTheme()

  useEffect(() => {
    toggleMounted()
  }, [])
  if (mounted === false)
    return (
      <Box
        role="progressbar"
        css={{
          width: 62,
          height: 62,
        }}
      />
    )

  return (
    <Flex
      direction="column"
      css={{
        alignItems: "start",
      }}
    >
      <Label htmlFor="theme-switcher">Select theme</Label>
      <Select
        id="theme-switcher"
        onChange={(evt) => setTheme(evt.target.value)}
        value={theme}
      >
        {themes.map((t) => (
          <option value={t} key={t}>
            {t}
          </option>
        ))}
      </Select>
    </Flex>
  )
}

export default SelectTheme
