import { useTheme } from "next-themes"
import { useEffect, Fragment, FC } from "react"

import Box from "src/ui/box"
import useEnableOnce from "src/utils/hooks/use-enable-once"

import Select, {
  SelectItem,
  SelectItemText,
  SelectItemIndicator,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectIcon,
  SelectCheckIcon,
  SelectChevronDownIcon,
  SelectChevronUpIcon,
  SelectViewport,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectGroup,
} from "src/ui/select"

const SelectTheme: FC<{ className?: string }> = ({ className }) => {
  const [isEnable, enableOnce] = useEnableOnce()
  const { theme, setTheme, themes } = useTheme()

  useEffect(() => {
    enableOnce()
  }, [enableOnce])
  if (isEnable === false)
    return (
      <Box
        role="progressbar"
        css={{
          width: 35,
          height: 35,
        }}
      />
    )

  return (
    <Select onValueChange={(newValue) => setTheme(newValue)} value={theme}>
      <SelectTrigger className={className} aria-label="Theme">
        <SelectValue placeholder="Select a theme" />
        <SelectIcon>
          <SelectChevronDownIcon />
        </SelectIcon>
      </SelectTrigger>
      <SelectContent>
        <SelectScrollUpButton>
          <SelectChevronUpIcon />
        </SelectScrollUpButton>
        <SelectViewport>
          <SelectGroup>
            {themes.map((t) => (
              <Fragment key={t}>
                <SelectItem value={t}>
                  <SelectItemIndicator>
                    <SelectCheckIcon />
                  </SelectItemIndicator>
                  <SelectItemText>{t}</SelectItemText>
                </SelectItem>
              </Fragment>
            ))}
          </SelectGroup>
        </SelectViewport>
        <SelectScrollDownButton>
          <SelectChevronDownIcon />
        </SelectScrollDownButton>
      </SelectContent>
    </Select>
  )
}

export default SelectTheme
