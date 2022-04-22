import Head from 'next/head'
import Hello from 'src/components/hello'
import type { NextPageWithLayout } from 'src/types'

const MetaTags = () => {
  return (
    <Head>
      <title>Next Typescript Starter</title>
    </Head>
  )
}

const IndexPage: NextPageWithLayout = () => {
  return (
    <>
      <MetaTags />
      <main
        style={{
          backgroundColor: '#333',
          color: 'white',
          fontFamily: 'sans-serif',
          height: '100%',
          padding: '1rem',
        }}
      >
        <h1>Hello</h1>
        <Hello />
      </main>
    </>
  )
}

export default IndexPage
