import type { ReactNode } from "react"
import type { NextPage } from "next"
import type { AppProps } from "next/app"

export type NextPageWithLayout<T = Record<string, unknown>> = NextPage<T> & {
  // eslint-disable-next-line no-unused-vars
  getLayout?: (page: JSX.Element) => ReactNode
}
export type AppPropsWithLayout<T> = AppProps<T> & {
  Component: NextPageWithLayout
}
