import { useRouter } from "next/router"
import ViewUser from "./ViewUser"

export default function Page() {
  const router = useRouter()
  if (router.isReady === false) return null

  const id = router.query.id as string
  return <ViewUser id={id} />
}
