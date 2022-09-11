import { blue, slate, blueDark, slateDark } from "@radix-ui/colors"

const computeColors = (
  colors: Record<string, string>,
  type: "brand" | "gray" | "accent"
) =>
  Object.keys(colors).reduce((acc, k, idx) => {
    acc[`${type}${idx + 1}`] = colors[k]
    return acc
  }, {} as Record<string, string>)

const brandColor = computeColors(blue, "brand")
const brandDarkColor = computeColors(blueDark, "brand")
const grayColor = computeColors(slate, "gray")
const grayDarkColor = computeColors(slateDark, "gray")

export const coreColors = {
  brand: brandColor,
  brandDark: brandDarkColor,
  gray: grayColor,
  grayDark: grayDarkColor,
}
