import Link from "next/link"
import { ReactNode } from "react"
import { link } from "src/components/ui"
import { main, nav, navbar } from "./styles.css"

export default function RootLayout(props: { children: ReactNode }) {
  return (
    <>
      <nav className={nav}>
        <ul className={navbar}>
          <li>
            <Link href="/">
              <a className={link()}>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/users">
              <a className={link()}>Users</a>
            </Link>
          </li>
        </ul>
      </nav>
      <main className={main}>{props.children}</main>
    </>
  )
}
