import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { REFRESH_TOKEN_COOKIE_NAME } from '@/shared/config/server-env-variables'
import { routes } from '@/shared/config'

export async function GET() {
  const cookieStore = cookies()
  cookieStore.set(REFRESH_TOKEN_COOKIE_NAME, '', {
    httpOnly: true,
    sameSite: 'strict',
    path: routes.API_AUTH,
  })
  return NextResponse.json({ status: 'Unauthorized' })
}
