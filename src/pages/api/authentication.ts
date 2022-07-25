import type { NextApiRequest, NextApiResponse } from 'next'
import { setCookie } from 'cookies-next'

import teacherService from '@services/Teacher'
import withErrorHandling from 'server/middlewares/withErrorHandling'

export default withErrorHandling(async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const { email, password } = req.body
      const teacherData = await teacherService.login(email, password)

      const ThirtyDaysInMs = 30 * 24 * 3600 * 1000

      setCookie('refreshToken', teacherData.refreshToken, {
        res,
        req,
        maxAge: ThirtyDaysInMs,
        httpOnly: true,
      })

      return res.status(200).json(teacherData)
    } catch (e) {
      console.log(e)
      res.status(500).send('Internal Server Error')
    }
  } else {
    res.status(405).send('Method Not Allowed')
  }
})
