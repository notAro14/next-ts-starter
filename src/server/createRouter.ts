import * as trpcServer from "@trpc/server"
import type { Context } from "./context"

export const createRouter = () => trpcServer.router<Context>()
