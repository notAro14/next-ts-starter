import { useGetUserByIdQuery } from "src/api/user/user.slice.api"
import { heading, text } from "src/components/ui"

export default function ViewUser(props: { id: string }) {
  const { id } = props
  const { data: user, isLoading, error } = useGetUserByIdQuery(id)

  if (error)
    return (
      <p className={text} role="alert">
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore */}
        {error?.status === 404 ? "User not found" : "Failed to get user"}
      </p>
    )
  if (isLoading)
    return (
      <p className={text} role="progressbar">
        Loading...
      </p>
    )
  if (user) return <h2 className={heading}>{user?.name}</h2>
  return null
}
