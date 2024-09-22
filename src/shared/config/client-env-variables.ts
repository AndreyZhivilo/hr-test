import { z } from 'zod'

export const BACKEND_URL = z.string().parse(process.env.NEXT_PUBLIC_BACKEND_URL)

export const ACCESS_TOKEN_LOCAL_STORAGE_NAME = z
  .string()
  .parse(process.env.NEXT_PUBLIC_ACCESS_TOKEN_LOCAL_STORAGE_NAME)
