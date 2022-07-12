import genUID from '@src/utils/genUID'
import Teacher from './Teacher'

export default class TeacherDTO implements Teacher {
  id: string
  name: string

  constructor(id: string, name: string) {
    this.id = id
    this.name = name
  }

  findOne() {}
}
