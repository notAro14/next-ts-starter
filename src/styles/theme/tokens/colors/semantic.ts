import { whiteA } from "@radix-ui/colors"

export const semanticColors = {
  bg: "var(--colors-background1)",
  "bg-transparent": "var(--colors-brandA1)",
  "bg-subtle": "var(--colors-brand2)",
  ui: "var(--colors-brand3)",
  "ui-hovered": "var(--colors-brand4)",
  "ui-selected": "var(--colors-brand5)",
  line: "var(--colors-brand6)",
  border: "var(--colors-brand7)",
  "border-hovered": "var(--colors-brand8)",
  solid: "var(--colors-brand9)",
  "solid-hovered": "var(--colors-brand10)",
  "text-lo": "var(--colors-brand11)",
  "text-hi": "var(--colors-brand12)",

  "border-gray": "var(--colors-gray3)",
  "text-lo-gray": "var(--colors-gray11)",
  "text-hi-gray": "var(--colors-gray12)",

  "bg-danger": "var(--colors-danger1)",
  "bg-transparent-danger": "var(--colors-dangerA1)",
  "bg-subtle-danger": "var(--colors-danger2)",
  "ui-danger": "var(--colors-danger3)",
  "ui-hovered-danger": "var(--colors-danger4)",
  "ui-selected-danger": "var(--colors-danger5)",
  "line-danger": "var(--colors-danger6)",
  "border-danger": "var(--colors-danger7)",
  "border-hovered-danger": "var(--colors-danger8)",
  "solid-danger": "var(--colors-danger9)",
  "solid-hovered-danger": "var(--colors-danger10)",
  "text-lo-danger": "var(--colors-danger11)",
  "text-hi-danger": "var(--colors-danger12)",
} as const

export const colors = {
  ...semanticColors,

  "text-functional": semanticColors["text-hi-gray"],
  "text-functional-low": semanticColors["text-lo-gray"],
  "text-vibrant": semanticColors["text-hi"],
  "text-vibrant-low": semanticColors["text-lo"],
  "text-danger-low": semanticColors["text-lo-danger"],
  "text-danger": semanticColors["text-hi-danger"],

  "text-fg-white": whiteA.whiteA12,
}
