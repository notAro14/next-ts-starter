import type { NextPageWithLayout } from "src/types/next"

import SEO from "src/components/common/seo"
import { UserList } from "src/components/user"
import { useSession } from "next-auth/react"
import { LazyLoader } from "src/components/common/loader"

const ViewUsersPage: NextPageWithLayout = () => {
  const { status } = useSession({ required: true })
  if (status === "loading") return <LazyLoader show />
  return (
    <>
      <SEO title="User list" />
      <UserList />
    </>
  )
}

export default ViewUsersPage
