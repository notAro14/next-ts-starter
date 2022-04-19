import Hello from 'components/hello'
import SEO from 'shared/seo'
import type { NextPageWithLayout } from 'types'

const IndexPage: NextPageWithLayout = () => {
  return (
    <>
      <SEO title='Never Skip Leg Day' />
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
