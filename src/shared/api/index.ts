import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { BACKEND_URL } from '../config/client-env-variables'
import { ApolloError } from '@apollo/client'

export const createClientWithCredentials = (token: string | null) => {
  const httpLink = createHttpLink({
    uri: BACKEND_URL,
  })

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    }
  })

  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  })
}

export const createClient = () => {
  return new ApolloClient({
    uri: BACKEND_URL,
    cache: new InMemoryCache(),
  })
}

function isApolloError(error: any): error is ApolloError {
  return Boolean(error?.graphQLErrors && Array.isArray(error.graphQLErrors))
}

export function isUnauthorizedGraphQLError(error: any): boolean {
  if (!isApolloError(error)) return false
  return error.graphQLErrors.some(
    (e) => e?.extensions?.code === 'UNAUTHENTICATED'
  )
}

type LoginOkResponse = {
  access_token: string
  message?: never
}

type LoginErrorResponse = {
  message: 'Unauthorized' | string
  access_token?: never
}

export type LoginResponse = LoginOkResponse | LoginErrorResponse
