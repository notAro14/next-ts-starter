import Head from 'next/head'
import Hello from 'src/components/hello'
import type { NextPageWithLayout } from 'src/types'
import { styled } from 'src/styles/stitches.config'

const Layout = styled('main', {
  backgroundColor: '$blue2',
  height: '100%',
  padding: '1rem',
})

const Heading = styled('h2', {
  color: '$blue12',
  fontFamily: 'sans-serif',
})

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
      <Heading as='h1'>Next Typescript Starter</Heading>
      <Hello />
    </>
  )
}

IndexPage.getLayout = (page) => {
  return (
    <Layout>
      <MetaTags />
      {page}
    </Layout>
  )
}

export default IndexPage
