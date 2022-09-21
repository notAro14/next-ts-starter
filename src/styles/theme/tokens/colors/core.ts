import {
  blue,
  slate,
  blueDark,
  slateDark,
  whiteA,
  blackA,
  red,
  redDark,
} from "@radix-ui/colors"

const computeColors = (
  colors: Record<string, string>,
  type: "brand" | "gray" | "accent" | "background" | "danger"
) =>
  Object.keys(colors).reduce((acc, k, idx) => {
    acc[`${type}${idx + 1}`] = colors[k]
    return acc
  }, {} as Record<string, string>)

const brandColor = computeColors(blue, "brand")
const brandDarkColor = computeColors(blueDark, "brand")
const grayColor = computeColors(slate, "gray")
const grayDarkColor = computeColors(slateDark, "gray")
const whiteColor = computeColors(whiteA, "background")
const blackColor = computeColors(blackA, "background")
const redColor = computeColors(red, "danger")
const redDarkColor = computeColors(redDark, "danger")

export const coreColors = {
  brand: brandColor,
  brandDark: brandDarkColor,
  gray: grayColor,
  grayDark: grayDarkColor,
  backgroundDark: blackColor,
  background: whiteColor,
  red: redColor,
  redDark: redDarkColor,
}
