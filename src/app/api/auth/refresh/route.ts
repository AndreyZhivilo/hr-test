import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/shared/api'
import { gql } from '@apollo/client'
import { cookies } from 'next/headers'
import { REFRESH_TOKEN_COOKIE_NAME } from '@/shared/config/server-env-variables'
import { routes } from '@/shared/config'

const REFRESH = gql`
  mutation Refresh($token: String!) {
    refreshToken(refreshToken: $token) {
      access_token
      refresh_token
    }
  }
`

type RefreshResponse = {
  refreshToken: {
    access_token: string
    refresh_token: string
  }
}
export async function GET(request: NextRequest) {
  try {
    const cookieStore = cookies()
    const refreshToken = cookieStore.get(REFRESH_TOKEN_COOKIE_NAME)?.value

    if (!refreshToken) throw new Error()

    const client = createClient()
    const { data } = await client.mutate<RefreshResponse, { token: string }>({
      mutation: REFRESH,
      variables: { token: String(refreshToken) },
    })
    if (!data) throw new Error()

    const { access_token, refresh_token } = data.refreshToken

    cookieStore.set(REFRESH_TOKEN_COOKIE_NAME, refresh_token, {
      httpOnly: true,
      sameSite: 'strict',
      path: routes.API_REFRESH,
    })

    return NextResponse.json({ access_token })
  } catch (e: any) {
    return NextResponse.json(e)
  }
}
