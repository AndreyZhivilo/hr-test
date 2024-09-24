import { z } from 'zod'

export const BACKEND_URL = z.string().parse(process.env.NEXT_PUBLIC_BACKEND_URL)
