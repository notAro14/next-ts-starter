// PACKAGES
import { FC } from "react"
// FUNCTIONS
import { trpc } from "src/utils/trpc-client"
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
  const { data, isLoading, isError, isSuccess } = trpc.useQuery([
    "hello.message",
    { text: "NextJS" },
  ])

  return (
    <>
      {isLoading && <Loading />}
      {isError && <Error />}
      {isSuccess && data && <Success data={data.message} />}
    </>
  )
}

export default Hello
