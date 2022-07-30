// VENDORS
import React from "react"
import NextDocument, { Html, Head, Main, NextScript } from "next/document"
// FUNCTIONS
import { getCssText } from "src/ui-kit/stitches.config"

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
