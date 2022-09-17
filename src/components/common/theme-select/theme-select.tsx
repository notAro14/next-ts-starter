import { useTheme } from "next-themes"
import { Fragment, FC } from "react"

import { useIsBrowser } from "src/hooks/use-is-browser"

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
  SelectLabel,
  SelectGroup,
} from "src/components/common/select"

const ThemeSelect: FC<{ className?: string }> = ({ className }) => {
  const isBrowser = useIsBrowser()
  const { theme, setTheme, themes } = useTheme()

  if (isBrowser === false) return null

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
            <SelectLabel>Change theme</SelectLabel>
            {themes.map((t) => {
              return (
                <Fragment key={t}>
                  <SelectItem value={t}>
                    <SelectItemIndicator>
                      <SelectCheckIcon />
                    </SelectItemIndicator>
                    <SelectItemText>{t}</SelectItemText>
                  </SelectItem>
                </Fragment>
              )
            })}
          </SelectGroup>
        </SelectViewport>
        <SelectScrollDownButton>
          <SelectChevronDownIcon />
        </SelectScrollDownButton>
      </SelectContent>
    </Select>
  )
}

export default ThemeSelect
