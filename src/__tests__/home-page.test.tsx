import { render } from "@testing-library/react"

import HomePage from "src/pages"

it("renders without throwing", () => {
  expect(() => {
    render(<HomePage />)
  }).not.toThrow()
})
