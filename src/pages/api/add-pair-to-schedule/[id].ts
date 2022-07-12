import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  success: boolean
}

export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
  res.status(200).json({ success: true })
}
