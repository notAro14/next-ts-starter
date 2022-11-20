import type { ReactElement, ReactNode } from "react"
import { Provider } from "react-redux"
import { render as _render } from "@testing-library/react"
import { store } from "src/store"

function Wrapper(props: { children: ReactNode }) {
  return <Provider store={store}>{props.children}</Provider>
}

const render = (ui: ReactElement) => {
  return _render(ui, {
    wrapper: Wrapper,
  })
}

export * from "@testing-library/react"
export { render }
