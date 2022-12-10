import { useRouter } from "next/router"
import Head from "next/head"
import { useGetUserByIdQuery } from "src/api/user/user.slice.api"
import ViewUser from "./ViewUser"

export default function Page() {
  const router = useRouter()
  const id = router.query.id as string
  const {
    data: user,
    isLoading,
    isError,
  } = useGetUserByIdQuery(id, {
    skip: router.isReady === false,
  })
  if (router.isReady === false) return null
  return (
    <>
      <Head>
        {isError && <title>Failed to get user</title>}
        {isLoading && <title>Loading...</title>}
        {user && <title>{user.name}</title>}
      </Head>
      <ViewUser id={id} />
    </>
  )
}
