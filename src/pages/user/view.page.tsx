import type { NextPageWithLayout } from "src/types/next"

import SEO from "src/components/common/seo"
import { UserList } from "src/components/user"

const ViewUsersPage: NextPageWithLayout = () => {
  return (
    <>
      <SEO title="User list" />
      <UserList />
    </>
  )
}

export default ViewUsersPage
