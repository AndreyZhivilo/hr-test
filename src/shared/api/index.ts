import { ApolloClient, InMemoryCache, createHttpLink} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import {NEXT_PUBLIC_BACKEND_URL} from '../config'

export const createClientWithCredentials = (token: string | undefined) => {
	
	const httpLink = createHttpLink({
		uri: NEXT_PUBLIC_BACKEND_URL,
	});

	const authLink = setContext((_, { headers }) => {
		return {
			headers: {
				...headers,
				authorization: token ? `Bearer ${token}` : "",
			}
		}
	});

	return new ApolloClient({
		link: authLink.concat(httpLink),
		cache: new InMemoryCache(),
	});

	
}

export const createClient = () => {
	return new ApolloClient({
  uri: NEXT_PUBLIC_BACKEND_URL,
  cache: new InMemoryCache(),
});
}






