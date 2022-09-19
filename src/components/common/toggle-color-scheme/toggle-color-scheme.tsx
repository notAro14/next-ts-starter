import { ActionIcon, useMantineColorScheme } from "@mantine/core"
import { SunIcon, MoonIcon } from "@radix-ui/react-icons"

function ToggleColorScheme() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const dark = colorScheme === "dark"

  return (
    <ActionIcon
      variant="outline"
      //color={dark ? "yellow" : "blue"}
      onClick={() => toggleColorScheme()}
      title="Toggle color scheme"
    >
      {dark ? <SunIcon /> : <MoonIcon />}
    </ActionIcon>
  )
}

export default ToggleColorScheme
