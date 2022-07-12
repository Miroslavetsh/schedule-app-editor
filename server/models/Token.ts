interface IToken {
  teacherId: string
  refreshToken: string
}

export default class Token implements IToken {
  teacherId: string
  refreshToken: string

  constructor(teacherId: string, refreshToken: string) {
    this.teacherId = teacherId
    this.refreshToken = refreshToken
  }
}
