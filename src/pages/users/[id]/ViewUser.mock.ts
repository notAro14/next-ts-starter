import { rest } from "msw"
import { setupServer } from "msw/node"

import type { User } from "src/api/user/user.type"
import { USER_URLS } from "src/api/user/user.constants"

export function mockUserById(id: string): User {
  return {
    id,
    name: "John",
    username: "john.doe",
    email: "john.doe@email.com",
    website: "https://www.johndoe.com",
  }
}

export function mockServer(userId: string) {
  return setupServer(
    rest.get(USER_URLS.byId(userId), function (_req, res, ctx) {
      return res(ctx.json(mockUserById(userId)))
    })
  )
}
