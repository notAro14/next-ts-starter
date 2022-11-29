import React from "react"
import NextDocument, { Head, Html, Main, NextScript } from "next/document"

import { themeClass } from "src/styles/theme/index.css"

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="fr">
        <Head></Head>
        <body className={themeClass}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
