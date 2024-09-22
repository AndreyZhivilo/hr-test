import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/shared/api'
import { gql } from '@apollo/client'
import { cookies } from 'next/headers'
import { REFRESH_TOKEN_COOKIE_NAME } from '@/shared/config/server-env-variables'
import { routes } from '@/shared/config'
import type { LoginForm } from '@/features/auth/model'

const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      access_token
      refresh_token
    }
  }
`

type BackendResponse = {
  login: {
    access_token: string
    refresh_token: string
  }
}

type LoginOkResponse = {
  access_token: string
  message?: never
}

type LoginErrorResponse = {
  message: 'Unauthorized' | any
  access_token?: never
}

export type LoginResponse = LoginOkResponse | LoginErrorResponse

export async function POST(request: NextRequest) {
  try {
    const credentials = (await request.json()) as LoginForm
    const client = createClient()
    const { data } = await client.mutate<BackendResponse, LoginForm>({
      mutation: LOGIN,
      variables: credentials,
    })

    if (!data) throw new Error()

    const { access_token, refresh_token } = data.login

    const cookieStore = cookies()

    cookieStore.set(REFRESH_TOKEN_COOKIE_NAME, refresh_token, {
      httpOnly: true,
      sameSite: 'strict',
      path: routes.API_REFRESH,
    })

    return NextResponse.json({ access_token })
  } catch (e: any) {
    if (
      e.graphQLErrors &&
      e.graphQLErrors.some((e: any) => e.message === 'Unauthorized')
    ) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
    } else {
      return NextResponse.json({ message: `Error: ${e}` })
    }
  }
}
