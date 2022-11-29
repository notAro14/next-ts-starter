import tinycolor from "tinycolor2"
import type { MyColorKey } from "./colors.types"

/**
 *
 * Map color object to a new color object
 * with a new key
 */
export function mapColors<T extends string>(
  colorObject: Record<string, string>,
  newColorKey: MyColorKey = "brand"
) {
  const keys = Object.keys(colorObject)
  return keys.reduce(function (newColorObject, originalColorKey) {
    const match = originalColorKey.match(/[0-9]+/)
    if (match === null) return newColorObject

    return {
      ...newColorObject,
      [`${newColorKey}${match[0]}`]: colorObject[originalColorKey],
    }
  }, {} as Record<T, string>)
}

export function changeAlpha(color: string, alpha: number) {
  return tinycolor(color).setAlpha(alpha).toHslString()
}

const SEMANTIC_COLOR = {
  bg: "bg",
  "bg-subtle": "bg-subtle",
  ui: "ui",
  "ui-hover": "ui-hover",
  "ui-select": "ui-select",
  line: "line",
  border: "border",
  "border-hover": "border-hover",
  solid: "solid",
  "solid-hover": "solid-hover",
  "text-lo": "text-lo",
  "text-hi": "text-hi",
} as const

const SEMANTIC_COLOR_IDX = {
  "1": SEMANTIC_COLOR.bg,
  "2": SEMANTIC_COLOR["bg-subtle"],
  "3": SEMANTIC_COLOR.ui,
  "4": SEMANTIC_COLOR["ui-hover"],
  "5": SEMANTIC_COLOR["ui-select"],
  "6": SEMANTIC_COLOR.line,
  "7": SEMANTIC_COLOR.border,
  "8": SEMANTIC_COLOR["border-hover"],
  "9": SEMANTIC_COLOR.solid,
  "10": SEMANTIC_COLOR["solid-hover"],
  "11": SEMANTIC_COLOR["text-lo"],
  "12": SEMANTIC_COLOR["text-hi"],
}

export function mapSemanticColors(colorObject: Record<string, string>) {
  const keys = Object.keys(colorObject)
  return keys.reduce(function (semanticColors, originalColorKey) {
    const match = originalColorKey.match(/[0-9]+/)
    if (match === null) return semanticColors
    const idx = match[0] as keyof typeof SEMANTIC_COLOR_IDX
    const semanticKey = SEMANTIC_COLOR_IDX[idx]
    semanticColors[semanticKey] = colorObject[originalColorKey]
    return semanticColors
  }, {} as Record<keyof typeof SEMANTIC_COLOR, string>)
}
