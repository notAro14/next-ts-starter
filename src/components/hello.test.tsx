import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'

import Hello from './hello'

const mock = 'Mocked hello'

const handlers = [
  rest.get('/api/hello', (req, res, ctx) => {
    return res(ctx.json({ message: mock }))
  }),
]
const server = setupServer(...handlers)

beforeAll(() => server.listen())
afterAll(() => server.close())

test('Hello component renders', async () => {
  render(<Hello />)
  await waitForElementToBeRemoved(screen.getByRole('progressbar'))
  screen.debug()
  expect(screen.queryByText(mock)).toBeInTheDocument()
})
