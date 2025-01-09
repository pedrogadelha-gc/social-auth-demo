import { HttpStatus } from '../http/constants'

export class HttpException extends Error {
  public status: number
  public message: string
  public details?: unknown

  constructor(status: number, message: string, details?: unknown) {
    super(message)
    this.status = status
    this.message = message
    this.details = details

    Object.setPrototypeOf(this, HttpException.prototype)
  }

  public get name() {
    return this.constructor.name
  }
}

export class BadRequestException extends HttpException {
  constructor(message: string = 'Bad Request', details?: unknown) {
    super(HttpStatus.BAD_REQUEST, message, details)
  }
}

export class UnauthorizedException extends HttpException {
  constructor(message: string = 'Unauthorized', details?: unknown) {
    super(HttpStatus.UNAUTHORIZED, message, details)
  }
}

export class ForbiddenException extends HttpException {
  constructor(message: string = 'Forbidden', details?: unknown) {
    super(HttpStatus.FORBIDDEN, message, details)
  }
}

export class NotFoundException extends HttpException {
  constructor(message: string = 'Not Found', details?: unknown) {
    super(HttpStatus.NOT_FOUND, message, details)
  }
}

export class MethodNotAllowedException extends HttpException {
  constructor(message: string = 'Method Not Allowed', details?: unknown) {
    super(HttpStatus.METHOD_NOT_ALLOWED, message, details)
  }
}

export class ConflictException extends HttpException {
  constructor(message: string = 'Conflict', details?: unknown) {
    super(HttpStatus.CONFLICT, message, details)
  }
}

export class InternalServerErrorException extends HttpException {
  constructor(message: string = 'Internal Server Error', details?: unknown) {
    super(HttpStatus.INTERNAL_SERVER_ERROR, message, details)
  }
}

export class ServiceUnavailableException extends HttpException {
  constructor(message: string = 'Service Unavailable', details?: unknown) {
    super(HttpStatus.SERVICE_UNAVAILABLE, message, details)
  }
}
