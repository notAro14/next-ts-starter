import { createStitches } from '@stitches/react'
import { blue, red } from '@radix-ui/colors'

export const { styled, getCssText } = createStitches({
  theme: {
    colors: {
      ...blue,
      ...red,
    },
  },
})
