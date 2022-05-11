import { createReactQueryHooks } from "@trpc/react"
import type { AppRouter } from "src/server/server"

export const trpc = createReactQueryHooks<AppRouter>()
