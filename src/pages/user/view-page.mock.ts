import { rest } from "msw"
import { setupServer } from "msw/node"

import { User, URLS } from "src/api/user.api"

export function mockUsers(): User[] {
  return [
    {
      id: "1",
      name: "John",
      username: "john.doe",
      email: "john.doe@email.com",
    },
  ]
}

export function mockServer() {
  return setupServer(
    rest.get(URLS.fetchUsersUrl, function (_req, res, ctx) {
      return res(ctx.json(mockUsers()))
    })
  )
}
