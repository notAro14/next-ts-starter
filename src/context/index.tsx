import { ReactNode } from "react"
import ReduxProvider from "./redux-provider"

interface Props {
  children: ReactNode
}
export default function Providers({ children }: Props) {
  return <ReduxProvider>{children}</ReduxProvider>
}
