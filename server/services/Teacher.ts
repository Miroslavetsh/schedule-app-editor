import bcrypt from 'bcrypt'

import tokenService from '@services/Token'
import TeacherModel from '@models/TeacherRegistered'
import postItemToAPI from './redis/postItemToAPI'
import TeacherDTO from '@models/TeacherDTO'
import ApiError from '@models/ApiError'
import prisma from '../prisma'

class TeacherService {
  async register(email: string, name: string, password: string) {
    const candidate = await prisma.teacher.findFirst({ where: { email } })

    if (candidate) throw ApiError.BadRequest('Teacher with this email already exists')

    const newCandidate = new TeacherModel(email, name, password)
    const hashPassword = await bcrypt.hash(password, 3)

    const teacher = await prisma.teacher.create({
      data: { ...newCandidate, password: hashPassword },
    })

    const teacherDTO = await postItemToAPI({ id: teacher.id, name: teacher.name }, 'teachers')

    const token = await prisma.token.findFirst({ where: { teacherId: teacher.id } })
    const { accessToken, refreshToken } = tokenService.generateTokens(teacher)

    if (token) {
      prisma.token.update({ where: { id: token.id }, data: { refreshToken } })
    }

    return {
      accessToken,
      refreshToken,
      teacher: new TeacherDTO(teacherDTO.id, teacherDTO.name),
    }
  }
}

export default new TeacherService()
