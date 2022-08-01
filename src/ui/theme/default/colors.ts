import { plum, tomato, whiteA, mauve } from "@radix-ui/colors"

export const colors = {
  ...plum,
  ...tomato,
  ...whiteA,
  ...mauve,
  "semantic-bg": "$plum1",
  "semantic-bg-subtle": "$plum2",
  "semantic-ui-bg": "$plum3",
  "semantic-ui-bg-hovered": "$plum4",
  "semantic-ui-bg-selected": "$plum5",
  "semantic-line": "$plum6",
  "semantic-ui-border": "$plum7",
  "semantic-ui-border-hovered": "$plum8",
  "semantic-solid": "$plum9",
  "semantic-solid-hovered": "$plum10",
  "semantic-text-lo": "$plum11",
  "semantic-text-hi": "$plum12",
  "semantic-text-lo-gray": "$mauve11",
  "semantic-text-hi-gray": "$mauve12",

  "semantic-text-lo-error": "$tomato11",
  "semantic-text-disabled": "$mauve8",
} as const
export default colors
