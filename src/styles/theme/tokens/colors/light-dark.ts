import { coreColors } from "./core"
import changeColorAlpha from "src/utils/change-color-alpha"

export const lightColors = {
  ...coreColors.brand,
  ...coreColors.gray,
  ...coreColors.background,
  ...coreColors.danger,
  brandA1: changeColorAlpha(coreColors.brand.brand1, 0.5),
  dangerA1: changeColorAlpha(coreColors.danger.danger1, 0.5),
  shadow: "0deg 0% 63%",
}

export const darkColors = {
  ...coreColors.brandDark,
  ...coreColors.grayDark,
  ...coreColors.backgroundDark,
  ...coreColors.dangerDark,
  brandA1: changeColorAlpha(coreColors.brandDark.brand1, 0.5),
  dangerA1: changeColorAlpha(coreColors.dangerDark.danger1, 0.5),
}
