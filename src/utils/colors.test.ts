import { blue } from "@radix-ui/colors"
import { mapSemanticColors, mapColors, changeAlpha } from "src/utils/colors"

describe("Color Utils", function () {
  it("should map color keys", function () {
    expect(mapColors(blue)).toEqual({
      brand1: blue.blue1,
      brand2: blue.blue2,
      brand3: blue.blue3,
      brand4: blue.blue4,
      brand5: blue.blue5,
      brand6: blue.blue6,
      brand7: blue.blue7,
      brand8: blue.blue8,
      brand9: blue.blue9,
      brand10: blue.blue10,
      brand11: blue.blue11,
      brand12: blue.blue12,
    })
  })

  it("should change a color's alpha", () => {
    const base = "0, 10%, 10%"
    const colorIn = `hsl(${base})`
    const alpha = 0.5
    const colorOut = `hsla(${base}, ${alpha})`
    expect(changeAlpha(colorIn, alpha)).toEqual(colorOut)
  })

  it("should map semantic color keys", function () {
    expect(mapSemanticColors(blue)).toEqual({
      bg: blue.blue1,
      "bg-subtle": blue.blue2,
      ui: blue.blue3,
      "ui-hover": blue.blue4,
      "ui-select": blue.blue5,
      line: blue.blue6,
      border: blue.blue7,
      "border-hover": blue.blue8,
      solid: blue.blue9,
      "solid-hover": blue.blue10,
      "text-lo": blue.blue11,
      "text-hi": blue.blue12,
    })
  })
})
