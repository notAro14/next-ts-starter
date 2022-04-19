import type { NextApiHandler } from 'next'

const handler: NextApiHandler = (req, res) => {
  return res.json({ message: 'hello' })
}

export default handler
