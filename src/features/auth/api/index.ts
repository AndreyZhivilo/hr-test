/* eslint-disable no-throw-literal */
import { ApolloQueryResult } from '@apollo/client'
import {
  createClientWithCredentials,
  createClient,
  errorHandler,
} from '@/shared/api'
import { GET_MY_PROFILE, LOGIN, REFRESH } from './queries'
import { routes } from '@/shared/config'
import { GetMyProfileQuery } from '@/shared/api/__generated__/graphql'
import { ACCESS_TOKEN_LOCAL_STORAGE_NAME as tokenName } from '@/shared/config/client-env-variables'

type Credentials = {
  email: string
  password: string
}

class AuthApi {
  fetchUser = async (
    attempts: number = 0
  ): Promise<ApolloQueryResult<GetMyProfileQuery>> => {
    try {
      const accessToken = localStorage.getItem(tokenName)
      if (!accessToken) {
        await this.refreshClient()
      }
      const client = createClientWithCredentials(accessToken)
      const res = await client.query({
        query: GET_MY_PROFILE,
      })
      return res
    } catch (e) {
      localStorage.removeItem(tokenName)
      if (attempts < 2) {
        return this.fetchUser(attempts + 1)
      }
      const error = errorHandler(e)
      throw error
    }
  }

  submitCredentials = async (credentials: Credentials) => {
    const res = await fetch(routes.API_LOGIN, {
      method: 'POST',
      body: JSON.stringify(credentials),
    })
    const data = await res.json()
    if (!res.ok) throw data

    if (data.access_token) {
      localStorage.setItem(tokenName, data.access_token)
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
    const data = await res.json()
    if (!res.ok) throw data
    if (data.access_token) {
      localStorage.setItem(tokenName, data.access_token)
    }
  }

  logout = async () => {
    await fetch(routes.API_LOG_OUT).then(() => {
      localStorage.removeItem(tokenName)
    })
  }
}

export const authApi = new AuthApi()
