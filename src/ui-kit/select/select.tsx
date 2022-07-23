import { FC, ReactNode } from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons"

import { styled } from "src/ui-kit/stitches.config"

const StyledContent = styled(SelectPrimitive.SelectContent, {
  "$$component-select-content-bg": "$colors$semantic-ui-bg",
  "$$component-select-content-font": "$fonts$semantic-primary",
  "$$component-select-content-color": "$colors$semantic-text-lo",
  "$$component-select-item-padding-x": "$space$lg",
  "$$component-select-text-color-gray": "$colors$semantic-text-hi-gray",

  overflow: "hidden",
  borderRadius: 6,
  backgroundColor: "$$component-select-content-bg",
  fontFamily: "$$component-select-content-font",
  color: "$$component-select-content-color",
  boxShadow:
    "0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)",
})
const StyledTrigger = styled(SelectPrimitive.SelectTrigger, {
  all: "unset",

  "$$component-select-font": "$fonts$semantic-primary",
  "$$component-select-bg": "$colors$semantic-ui-bg",
  "$$component-select-bg-hovered": "$colors$semantic-ui-bg-hovered",
  "$$component-select-color": "$colors$semantic-text-lo",
  "$$component-select-focused": "$colors$semantic-ui-border-hovered",

  fontFamily: "$$component-select-font",
  padding: "0 $md",
  lineHeight: 1,
  height: 35,
  borderRadius: 6,
  backgroundColor: "$$component-select-bg",
  color: "$$component-select-color",
  alignItems: "center",
  display: "inline-flex",
  gap: "$sm",
  textTransform: "capitalize",
  width: "fit-content",
  "&:hover": {
    backgroundColor: "$$component-select-bg-hovered",
  },
  "&[data-placeholder]": {
    color: "$$component-select-color",
  },
  "&:focus": {
    outlineWidth: "2px",
    outlineColor: "$$component-select-focused",
    outlineStyle: "solid",
  },
})
const StyledIcon = styled(SelectPrimitive.SelectIcon, {
  color: "$$component-select-color",
})
const StyledViewport = styled(SelectPrimitive.SelectViewport, {
  padding: "$sm",
})
const StyledLabel = styled(SelectPrimitive.Label, {
  padding: "0 $$component-select-item-padding-x",
  color: "$$component-select-text-color-gray",
  fontSize: "$sm",
})
export const StyledItem = styled(SelectPrimitive.Item, {
  "$$component-select-item-disabled": "$colors$semantic-text-disabled",
  all: "unset",
  height: 35,
  position: "relative",
  paddingLeft: "$$component-select-item-padding-x",
  paddingRight: "$$component-select-item-padding-x",
  borderRadius: 4,
  display: "flex",
  alignItems: "center",
  lineHeight: 1,
  userSelect: "none",
  textTransform: "capitalize",
  "&[data-disabled]": {
    color: "$$component-select-item-disabled",
    pointerEvents: "none",
  },
  "&[data-highlighted]": {
    backgroundColor: "$semantic-solid",
    color: "$whiteA12",
  },
})
export const StyledItemText = styled(SelectPrimitive.ItemText, {})
export const StyledSeparator = styled(SelectPrimitive.Separator, {
  height: 1,
  margin: 5,
  backgroundColor: "$semantic-line",
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
  backgroundColor: "$$component-select-content-bg",
  color: "$$component-select-color",
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
