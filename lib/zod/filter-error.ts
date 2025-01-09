import { ZodError } from 'zod'

export function filterZodError(err: ZodError) {
  const details = err.errors.map((e) => {
    return {
      message: e.message,
      path: e.path,
    }
  })

  return details
}
