import { NextApiRequest, NextApiResponse } from 'next'

class Teacher {
  async registration(req: NextApiRequest, res: NextApiResponse) {}

  async login(req: NextApiRequest, res: NextApiResponse) {
    try {
    } catch (e) {
      console.log(e)
    }
  }

  async logout(req: NextApiRequest, res: NextApiResponse) {
    try {
    } catch (e) {
      console.log(e)
    }
  }

  async refresh(req: NextApiRequest, res: NextApiResponse) {
    try {
    } catch (e) {
      console.log(e)
    }
  }

  async getAll() {
    try {
      return [12, 231, 344]
    } catch (e) {
      console.log(e)
    }
  }
}

export default new Teacher()
