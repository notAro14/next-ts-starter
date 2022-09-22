import {
  slate,
  slateDark,
  whiteA,
  blackA,
  red,
  redDark,
  mint,
  mintDark,
} from "@radix-ui/colors"

type SEMANTIC = "brand" | "gray" | "accent" | "danger" | "black" | "white"

const renameColors = (colors: Record<string, string>, key: SEMANTIC) =>
  Object.keys(colors).reduce((acc, k, idx) => {
    acc[`${key}${idx + 1}`] = colors[k]
    return acc
  }, {} as Record<string, string>)

const brandColor = renameColors(mint, "brand")
const brandDarkColor = renameColors(mintDark, "brand")
const grayColor = renameColors(slate, "gray")
const grayDarkColor = renameColors(slateDark, "gray")
const whiteColor = renameColors(whiteA, "white")
const blackColor = renameColors(blackA, "black")
const redColor = renameColors(red, "danger")
const redDarkColor = renameColors(redDark, "danger")

export const coreColors = {
  brand: brandColor,
  brandDark: brandDarkColor,
  gray: grayColor,
  grayDark: grayDarkColor,
  black: blackColor,
  white: whiteColor,
  danger: redColor,
  dangerDark: redDarkColor,
}
