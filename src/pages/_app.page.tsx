import { AppProps } from "next/app"

import Providers from "src/context"
import "src/styles/reset.css"

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  )
}

export default MyApp
