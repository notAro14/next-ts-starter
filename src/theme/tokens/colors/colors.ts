import { whiteA } from "@radix-ui/colors"

import { coreColors } from "./core"
import { semanticColors } from "./semantic"

import changeColorAlpha from "src/utils/change-color-alpha"

export const colors = {
  ...semanticColors,

  "text-functional": semanticColors["text-hi-gray"],
  "text-functional-low": semanticColors["text-lo-gray"],
  "text-vibrant": semanticColors["text-hi"],
  "text-vibrant-low": semanticColors["text-lo"],

  "text-fg-white": whiteA.whiteA12,
}

export const lightColors = {
  ...coreColors.brand,
  ...coreColors.gray,
  brandA1: changeColorAlpha(coreColors.brand.brand1, 0.5),
  shadow: "210deg 25% 63%",
}

export const darkColors = {
  ...coreColors.brandDark,
  ...coreColors.grayDark,
  brandA1: changeColorAlpha(coreColors.brandDark.brand1, 0.5),
}