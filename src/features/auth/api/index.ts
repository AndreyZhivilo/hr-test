import { ApolloQueryResult } from '@apollo/client'
import {
  createClientWithCredentials,
  createClient,
  LoginResponse,
} from '@/shared/api'
import { ACCESS_TOKEN_LOCAL_STORAGE_NAME } from '@/shared/config/client-env-variables'
import { GET_MY_PROFILE, LOGIN, REFRESH } from './queries'
import { routes } from '@/shared/config'
import { GetMyProfileQuery } from '@/shared/api/__generated__/graphql'

type Credentials = {
  email: string
  password: string
}

class AuthApi {
  fetchUser = async (
    attempts: number = 0
  ): Promise<ApolloQueryResult<GetMyProfileQuery>> => {
    try {
      const token = localStorage.getItem(ACCESS_TOKEN_LOCAL_STORAGE_NAME)
      const client = createClientWithCredentials(token)
      const res = await client.query({
        query: GET_MY_PROFILE,
      })
      return res
    } catch (e) {
      if (attempts < 2) {
        await this.refreshClient()
        return await this.fetchUser(attempts + 1)
      }
      throw e
    }
  }

  submitCredentials = async (credentials: Credentials) => {
    const res = await fetch(routes.API_LOGIN, {
      method: 'POST',
      body: JSON.stringify(credentials),
    })
    const data: LoginResponse = await res.json()
    if (data.message) throw new Error(data.message)

    if (data.access_token) {
      localStorage.setItem(ACCESS_TOKEN_LOCAL_STORAGE_NAME, data.access_token)
    }
  }

  login = async (credentials: Credentials) => {
    const client = createClient()
    const { data } = await client.mutate({
      mutation: LOGIN,
      variables: credentials,
    })
    return {
      access_token: data?.login.access_token || '',
      refresh_token: data?.login.refresh_token || '',
    }
  }

  refresh = async (refreshToken: string) => {
    const client = createClient()
    const { data } = await client.mutate({
      mutation: REFRESH,
      variables: { token: String(refreshToken) },
    })
    return {
      access_token: data?.refreshToken.access_token || '',
      refresh_token: data?.refreshToken.refresh_token || '',
    }
  }

  refreshClient = async () => {
    const res = await fetch(routes.API_REFRESH)
    const data: LoginResponse = await res.json()
    if (data.access_token) {
      localStorage.setItem(ACCESS_TOKEN_LOCAL_STORAGE_NAME, data.access_token)
    }
    if (data.message) {
      throw new Error(data.message)
    }
  }
}

export const authApi = new AuthApi()
