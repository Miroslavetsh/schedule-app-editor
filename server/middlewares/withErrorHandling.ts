import ApiError from '@models/ApiError'
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'

export default (handler: NextApiHandler) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      handler(req, res)
    } catch (err) {
      if (err instanceof ApiError) {
        return res.status(err.status).json({ message: err.message, errors: err.errors })
      }

      return res.status(500).json({ message: 'Сталася Непередбачувана Помилка' })
    }
  }
}
