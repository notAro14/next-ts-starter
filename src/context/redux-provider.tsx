import { FC, ReactNode } from "react"
import { Provider } from "react-redux"

import { store } from "src/store"

interface Props {
  children: ReactNode
}
const ReduxProvider: FC<Props> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>
}

export default ReduxProvider
