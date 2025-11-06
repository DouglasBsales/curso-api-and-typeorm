import { AppErrors } from '@/common/domain/erros/app-error'
import { NextFunction, Request, Response } from 'express'

type ErrorHandlderType = {
  (
    error: Error,
    request: Request,
    response: Response,
    next: NextFunction,
  ): Response
}

export const errorHanlder: ErrorHandlderType = (
  error,
  request,
  response,
  _next,
) => {
  if (error instanceof AppErrors) {
    return response.status(error.statusCode).json({
      status: 'error',
      error: error.message,
    })
  }

  console.error(error)

  return response
    .status(500)
    .json({ status: 'error', error: 'Internal server error' })
}
