import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { authApi } from '@/features/auth/api'
import { REFRESH_TOKEN_COOKIE_NAME } from '@/shared/config/server-env-variables'
import { routes } from '@/shared/config'
import { errorHandler } from '@/shared/api'

export async function GET() {
  try {
    const cookieStore = cookies()
    const refreshToken = cookieStore.get(REFRESH_TOKEN_COOKIE_NAME)?.value

    if (!refreshToken) throw new Error('Вы не авторизованы')

    const { access_token, refresh_token } = await authApi.refresh(refreshToken)

    cookieStore.set(REFRESH_TOKEN_COOKIE_NAME, refresh_token, {
      httpOnly: true,
      sameSite: 'strict',
      path: routes.API_AUTH,
    })

    return NextResponse.json({ access_token })
  } catch (e: any) {
    const error = errorHandler(e)
    return NextResponse.json(error, { status: error.status })
  }
}
