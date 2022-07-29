import { useTheme } from "next-themes"
import { useReducer, useEffect, Fragment, FC } from "react"
import Box from "src/ui-kit/box"

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
  SelectLabel,
  StyledSeparator,
} from "src/ui-kit/select"

const DISABLED_THEMES = [
  {
    name: "adventure-time",
    display: "Adventure time",
  },
  {
    name: "dc-comics",
    display: "DC comics",
  },
]

const SelectTheme: FC<{ className?: string }> = ({ className }) => {
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
            <SelectLabel>Available themes</SelectLabel>
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
          <StyledSeparator />
          {/* TEST */}
          <SelectGroup>
            <SelectLabel>Disabled themes</SelectLabel>
            {DISABLED_THEMES.map((t) => (
              <SelectItem value={t.name} key={t.name} disabled>
                <SelectItemIndicator>
                  <SelectCheckIcon />
                </SelectItemIndicator>
                <SelectItemText>{t.display}</SelectItemText>
              </SelectItem>
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
