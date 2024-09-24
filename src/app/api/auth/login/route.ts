import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { errorHandler } from '@/shared/api'
import { REFRESH_TOKEN_COOKIE_NAME } from '@/shared/config/server-env-variables'
import { routes } from '@/shared/config'
import type { LoginForm } from '@/features/auth/model'
import { authApi } from '@/features/auth/api'

export async function POST(request: NextRequest) {
  try {
    const credentials = (await request.json()) as LoginForm

    const { access_token, refresh_token } = await authApi.login(credentials)

    const cookieStore = cookies()

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
