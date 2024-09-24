import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { BACKEND_URL } from '../config/client-env-variables'

export const createClientWithCredentials = (token: string | null) => {
  const httpLink = createHttpLink({
    uri: BACKEND_URL,
  })

  const authLink = setContext((_, { headers }) => ({
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }))

  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  })
}

export const createClient = () =>
  new ApolloClient({
    uri: BACKEND_URL,
    cache: new InMemoryCache(),
  })

export function isUnauthorizedGraphQLError(error: any): boolean {
  if (error?.graphQLErrors && Array.isArray(error.graphQLErrors)) {
    return error.graphQLErrors.some(
      (e: any) => e?.extensions?.code === 'UNAUTHENTICATED'
    )
  }
  return false
}

export const errorHandler = (e: any) => {
  if (e.networkError) {
    return {
      message: e.message,
      networkError: true,
      status: e.networkError.statusCode || 500,
    }
  }
  if (e.graphQLErrors) {
    return {
      message: e.message,
      graphQLErrors: e.graphQLErrors,
      status: 400,
    }
  }
  return { message: 'Внутренняя ошибка сервера', status: 400 }
}

export const getErrorMessage = (e: ReturnType<typeof errorHandler>) => {
  if (e.graphQLErrors && isUnauthorizedGraphQLError(e)) {
    return 'Ошибка авторизации'
  }
  if (e.graphQLErrors) {
    return JSON.stringify(e.graphQLErrors)
  }
  return 'Произошла непридвиденная ошибка'
}
