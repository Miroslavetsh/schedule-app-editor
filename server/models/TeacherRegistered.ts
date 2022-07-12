import genUID from '@src/utils/genUID'
import Teacher from './Teacher'

interface ITeacherRegistered extends Teacher {
  id: string
  name: string
  password: string
}
export default class TeacherRegistered implements ITeacherRegistered {
  id: string
  email: string
  name: string
  password: string

  constructor(email: string, name: string, password: string) {
    this.id = genUID('teacher', Date.now())
    this.email = email
    this.name = name
    this.password = password
  }

  findOne() {}
}
