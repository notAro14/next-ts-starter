import { FC, useEffect, useState } from 'react'

const Loading = () => <p role='progressbar'>Loading...</p>
const Error = () => <p role='alert'>Failed to fetch data</p>
const Success: FC<{
  data: string
}> = ({ data }) => <p>{data}</p>

const Hello: FC = () => {
  const [state, setState] = useState<{
    status: 'success' | 'error' | 'pending' | 'idle'
    data: null | { message: string }
  }>({ data: null, status: 'idle' })

  useEffect(() => {
    ;(async () => {
      setState({
        status: 'pending',
        data: null,
      })
      try {
        const res = await fetch('/api/hello')
        const data = (await res.json()) as { message: string }
        setState({
          status: 'success',
          data,
        })
      } catch (e) {
        setState({
          status: 'error',
          data: null,
        })
        console.error(e)
      }
    })()
  }, [])

  return (
    <>
      {state.status === 'pending' && <Loading />}
      {state.status === 'error' && <Error />}
      {state.status === 'success' && state.data && (
        <Success data={state.data.message} />
      )}
    </>
  )
}

export default Hello
