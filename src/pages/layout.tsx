import Link from "next/link"
import { ReactNode } from "react"

export default function RootLayout(props: { children: ReactNode }) {
  return (
    <section>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/users">
              <a>Users</a>
            </Link>
          </li>
        </ul>
      </nav>
      <main>{props.children}</main>
    </section>
  )
}
