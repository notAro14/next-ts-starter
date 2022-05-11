// PACKAGES
import superjson from "superjson"
// FUNCTIONS
import { createRouter } from "./createRouter"
import hello from "./routers/hello"

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("hello.", hello)

export type AppRouter = typeof appRouter
