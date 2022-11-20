import { render, waitForElementToBeRemoved, screen } from "src/utils/test-utils"
import ViewUsers from "./ViewUsers"
import { mockServer, mockUsers } from "./ViewUsers.mock"

const server = mockServer()
beforeAll(function () {
  server.listen()
})
afterAll(function () {
  server.close()
})
afterEach(function () {
  server.resetHandlers()
})

it("renders a list of users", async () => {
  render(<ViewUsers />)
  await waitForElementToBeRemoved(screen.getByRole("progressbar"))
  expect(screen.queryAllByRole("listitem")).toHaveLength(mockUsers().length)
})
