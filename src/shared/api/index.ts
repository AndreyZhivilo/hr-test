import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { BACKEND_URL } from '../config/client-env-variables'

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
