export class AppErrors extends Error {
  public readonly statusCode: number

  public message: string

  constructor(message, statusCode = 400) {
    super(message)
    this.statusCode = statusCode
  }
}
