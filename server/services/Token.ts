import jwt from 'jsonwebtoken'

import prisma from '../prisma'

const secretAccessKey = process.env.JWT_ACCESS_SECRET || ''
const secretRefreshKey = process.env.JWT_ACCESS_SECRET || ''

class TokenService {
  generateTokens(payload: any) {
    const accessToken = jwt.sign(payload, secretAccessKey, { expiresIn: '30m' })
    const refreshToken = jwt.sign(payload, secretRefreshKey, { expiresIn: '30d' })

    return {
      accessToken,
      refreshToken,
    }
  }

  async save(teacherId: string, refreshToken: string) {
    const candidate = await prisma.token.findFirst({
      where: {
        teacherId,
      },
    })

    if (candidate) {
      return await prisma.token.update({ where: { id: candidate.id }, data: { refreshToken } })
    }

    const token = await prisma.token.create({ data: { teacherId, refreshToken } })

    return token
  }
}

export default new TokenService()
