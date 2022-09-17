import type { ReactNode } from "react"
import type { NextPage } from "next"
import type { AppProps } from "next/app"

export type NextPageWithLayout = NextPage & {
  // eslint-disable-next-line no-unused-vars
  getLayout?: (page: JSX.Element) => ReactNode
}

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}
