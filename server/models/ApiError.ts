export default class ApiError extends Error {
  status: number
  errors: Array<Error>

  constructor(status: number, message: string, errors: Array<Error> = []) {
    super(message)
    this.status = status
    this.errors = errors
  }

  static Unauthorized() {
    return new ApiError(401, 'Викладача не авторизовано!')
  }

  static BadRequest(message: string, errors: Array<Error> = []) {
    return new ApiError(400, message, errors)
  }
}
