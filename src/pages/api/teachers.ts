import type { NextApiRequest, NextApiResponse } from 'next'
import { setCookie } from 'cookies-next'

import teacherService from '@services/Teacher'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const { email, name, password } = req.body
      const teacherData = await teacherService.register(email, name, password)

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
}