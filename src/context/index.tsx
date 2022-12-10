import { ReactNode } from "react"
import ReduxProvider from "./redux-provider"
import StyleProvider from "./style-provider"

interface Props {
  children: ReactNode
}
export default function Providers({ children }: Props) {
  return (
    <StyleProvider>
      <ReduxProvider>{children}</ReduxProvider>
    </StyleProvider>
  )
}
