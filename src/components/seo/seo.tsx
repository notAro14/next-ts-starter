import Head from "next/head"

export default function SEO({ children }: { children: string }) {
  return (
    <Head>
      <title>{children}</title>
    </Head>
  )
}
