import { z } from "zod"

import { createRouter } from "../createRouter"

const hello = createRouter().query("message", {
  input: z
    .object({
      text: z.string().nullish(),
    })
    .nullish(),
  resolve({ input }) {
    return {
      message: `Hello ${input?.text ?? "World"}`,
    }
  },
})

export default hello
