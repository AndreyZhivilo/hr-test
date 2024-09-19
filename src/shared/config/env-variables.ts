import { z } from 'zod'

export const NEXT_PUBLIC_BACKEND_URL = z
  .string()
  .parse(process.env.NEXT_PUBLIC_BACKEND_URL)

export const REFRESH_TOKEN_COOKIE_NAME = z
  .string()
  .parse(process.env.REFRESH_TOKEN_COOKIE_NAME)
