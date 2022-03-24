import { FC } from 'react'
import Head from 'next/head'

interface SEOProps {
  title: string
}

const SEO: FC<SEOProps> = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  )
}

export default SEO
