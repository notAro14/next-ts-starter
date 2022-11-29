import Head from "next/head"
import { heading } from "src/components/ui"

export default function Page() {
  return (
    <>
      <Head>
        <title>Next TS starter</title>
      </Head>
      <h1 className={heading()}>Next TS starter code</h1>
      <p>Bootstrap quickly a Next TS project with this starter</p>
    </>
  )
}
