// PACKAGES
import { FC, useEffect, useState } from "react"

// COMPONENTS
import Text from "src/shared/text"

const Loading = () => <Text role="progressbar">Loading...</Text>
const Error = () => (
  <Text
    css={{
      color: "$red9",
    }}
    role="alert"
  >
    Failed to fetch data
  </Text>
)
const Success: FC<{
  data: string
}> = ({ data }) => <Text>API message: {data}</Text>

const Hello: FC = () => {
  const [state, setState] = useState<{
    status: "success" | "error" | "pending" | "idle"
    data: null | { message: string }
  }>({ data: null, status: "idle" })

  useEffect(() => {
    (async () => {
      setState({
        status: "pending",
        data: null,
      })
      try {
        const res = await fetch("/api/hello")
        const data = (await res.json()) as { message: string }
        setState({
          status: "success",
          data,
        })
      } catch (e) {
        setState({
          status: "error",
          data: null,
        })
        console.error(e)
      }
    })()
  }, [])

  return (
    <>
      {state.status === "pending" && <Loading />}
      {state.status === "error" && <Error />}
      {state.status === "success" && state.data && (
        <Success data={state.data.message} />
      )}
    </>
  )
}

export default Hello
