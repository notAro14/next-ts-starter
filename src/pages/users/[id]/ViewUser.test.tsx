import { render, waitForElementToBeRemoved, screen } from "src/utils/test-utils"
import ViewUser from "./ViewUser"
import { mockServer, mockUserById } from "./ViewUser.mock"

const USER_ID = "14"
const server = mockServer(USER_ID)
beforeAll(function () {
  server.listen()
})
afterAll(function () {
  server.close()
})
afterEach(function () {
  server.resetHandlers()
})

it("renders a user", async () => {
  render(<ViewUser id={USER_ID} />)
  await waitForElementToBeRemoved(screen.getByRole("progressbar"))
  expect(screen.queryByRole("heading")).toHaveTextContent(
    mockUserById(USER_ID).name
  )
})
