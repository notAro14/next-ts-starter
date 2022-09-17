import { FC, ReactNode } from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons"

import { styled, theme } from "src/styles/theme/stitches.config"

const StyledContent = styled(SelectPrimitive.SelectContent, {
  overflow: "hidden",
  borderRadius: theme.radii.sm,
  backgroundColor: theme.colors.ui,
  fontFamily: theme.fonts.sans,
  color: theme.colors["text-functional"],
  boxShadow: theme.shadows.medium,
})
const StyledTrigger = styled(SelectPrimitive.SelectTrigger, {
  fontFamily: theme.fonts.sans,
  padding: `0 ${theme.space.md}`,
  lineHeight: 1,
  height: 35,
  borderRadius: theme.radii.sm,
  border: "none",
  backgroundColor: theme.colors.ui,
  color: theme.colors["text-functional"],
  alignItems: "center",
  display: "inline-flex",
  gap: theme.space.sm,
  textTransform: "capitalize",
  width: "fit-content",
  boxShadow: theme.shadows.low,
  "&:hover": {
    backgroundColor: theme.colors["ui-hovered"],
    cursor: "pointer",
  },
  "&[data-placeholder]": {
    color: theme.colors["text-functional-low"],
  },
  "&:focus": {
    outlineWidth: "2px",
    outlineColor: theme.colors["border-hovered"],
    outlineStyle: "solid",
  },
})
const StyledIcon = styled(SelectPrimitive.SelectIcon, {
  color: theme.colors["text-functional"],
})
const StyledViewport = styled(SelectPrimitive.SelectViewport, {
  padding: theme.space.sm,
})
const StyledLabel = styled(SelectPrimitive.Label, {
  padding: `0 ${theme.space.lg}`,
  color: theme.colors["text-vibrant-low"],
  fontSize: theme.fontSizes.sm,
})
export const StyledItem = styled(SelectPrimitive.Item, {
  all: "unset",
  height: 35,
  position: "relative",
  paddingLeft: theme.space.lg,
  paddingRight: theme.space.lg,
  borderRadius: theme.radii.sm,
  display: "flex",
  alignItems: "center",
  lineHeight: 1,
  userSelect: "none",
  textTransform: "capitalize",
  //"&[data-disabled]": {
  //  pointerEvents: "none",
  //},
  "&[data-highlighted]": {
    backgroundColor: theme.colors.solid,
    color: theme.colors["text-fg-white"],
    cursor: "pointer",
  },
})
export const StyledItemText = styled(SelectPrimitive.ItemText, {})
export const StyledSeparator = styled(SelectPrimitive.Separator, {
  height: 1,
  margin: 5,
  backgroundColor: theme.colors.line,
})
export const StyledItemIndicator = styled(SelectPrimitive.ItemIndicator, {
  position: "absolute",
  left: 0,
  width: 25,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
})
const scrollButtonStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: 25,
  backgroundColor: theme.colors.ui,
  color: theme.colors["text-functional"],
  cursor: "default",
}
const StyledScrollUpButton = styled(
  SelectPrimitive.ScrollUpButton,
  scrollButtonStyles
)
const StyledScrollDownButton = styled(
  SelectPrimitive.ScrollDownButton,
  scrollButtonStyles
)

const Content: FC<{ children: ReactNode }> = ({ children, ...props }) => {
  return (
    <SelectPrimitive.Portal>
      <StyledContent {...props}>{children}</StyledContent>
    </SelectPrimitive.Portal>
  )
}

export const SelectTrigger = StyledTrigger
export const SelectValue = SelectPrimitive.Value
export const SelectIcon = StyledIcon
export const SelectContent = Content
export const SelectViewport = StyledViewport
export const SelectGroup = SelectPrimitive.Group
export const SelectItem = StyledItem
export const SelectItemText = SelectPrimitive.ItemText
export const SelectItemIndicator = StyledItemIndicator
export const SelectLabel = StyledLabel
export const SelectSeparator = StyledSeparator
export const SelectScrollUpButton = StyledScrollUpButton
export const SelectScrollDownButton = StyledScrollDownButton
export const SelectCheckIcon = CheckIcon
export const SelectChevronDownIcon = ChevronDownIcon
export const SelectChevronUpIcon = ChevronUpIcon

const Select = SelectPrimitive.Root
export default Select
