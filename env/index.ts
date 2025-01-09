import { z } from 'zod'
import { filterZodError } from '../lib/zod/filter-error'

export type Environment = {
  NODE_ENV: 'development' | 'production' | 'test'
  PORT: number
  HOST: string
  API_URL: string
  WEB_APP_URL: string
}

const environmentSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']),
  PORT: z
    .string()
    .refine((val) => !isNaN(parseInt(val)), {
      message: 'PORT must be a valid number.',
    })
    .transform((val) => parseInt(val)),
  HOST: z.string({ message: 'HOST is required.' }),
  API_URL: z.string().url({ message: 'API_URL must be a valid URL.' }),
  WEB_APP_URL: z.string().url({ message: 'WEB_APP_URL must be a valid URL.' }),
})

const env = environmentSchema.safeParse(process.env)

if (!env.success && process.env.NODE_ENV != 'test') {
  console.error(filterZodError(env.error))
  throw new Error('Invalid or missing environment variables.')
}

export const getEnv = <K extends keyof Environment>(
  key: K,
  fallback?: Environment[K],
): Environment[K] => {
  const value = process.env[key] as Environment[K] | undefined

  if (value == undefined) {
    if (fallback) {
      return fallback
    }
    throw new Error(`Missing environment variable: ${key}.`)
  }

  return value
}
