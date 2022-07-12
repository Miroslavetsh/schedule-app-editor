import type { NextApiRequest, NextApiResponse } from 'next'
import TeacherController from '@controllers/Teacher'

type Data = Array<number>

export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
  TeacherController.getAll().then((data) => res.status(200).json(data as Data))
}
