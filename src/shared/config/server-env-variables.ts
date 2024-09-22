import { z } from 'zod'

export const REFRESH_TOKEN_COOKIE_NAME = z
  .string()
  .parse(process.env.REFRESH_TOKEN_COOKIE_NAME)
