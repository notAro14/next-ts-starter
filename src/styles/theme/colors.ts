import { blue, slate, blackA, grass, red, amber } from "@radix-ui/colors"
import { mapColors, mapSemanticColors } from "src/utils/colors"
import {
  BrandColorKey,
  DangerColorKey,
  GrayColorKey,
  OverlayColorKey,
  SuccessColorKey,
  WarningColorKey,
} from "src/utils/colors.types"

export const brand = mapColors<BrandColorKey>(blue, "brand")
export const gray = mapColors<GrayColorKey>(slate, "gray")
export const overlay = mapColors<OverlayColorKey>(blackA, "overlay")
export const success = mapColors<SuccessColorKey>(grass, "success")
export const danger = mapColors<DangerColorKey>(red, "danger")
export const warning = mapColors<WarningColorKey>(amber, "warning")

export const semanticBrand = mapSemanticColors(brand)
export const semanticGray = mapSemanticColors(gray)
export const semanticSuccess = mapSemanticColors(success)
export const semanticDanger = mapSemanticColors(danger)
export const semanticWarning = mapSemanticColors(warning)

export const colors = {
  brand: {
    ...brand,
    ...semanticBrand,
  },
  gray: {
    ...gray,
    ...semanticGray,
  },
  success: {
    ...success,
    ...semanticSuccess,
  },
  danger: {
    ...danger,
    ...semanticDanger,
  },
  warning: {
    ...warning,
    ...semanticWarning,
  },
  overlay,
}
