import {
  render,
  waitForElementToBeRemoved,
  screen,
} from "@testing-library/react"
import { Provider } from "react-redux"

import { store } from "src/store"

//import ViewUsersPage from "./view.page"
import { UserList } from "src/components/user"
import { mockServer, mockUsers } from "./view-page.mock"

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
  render(
    <Provider store={store}>
      <UserList />
    </Provider>
  )
  await waitForElementToBeRemoved(screen.getByRole("progressbar"))
  expect(screen.queryAllByRole("listitem")).toHaveLength(mockUsers().length)
})
