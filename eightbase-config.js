
import { ApolloClient } from 'apollo-boost'
import { ApolloProvider } from "react-apollo";
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'


const ENDPOINT = 'https://api.8base.com/cjyg9ed20000201mr6n1vcqcb';

const httpLink = createHttpLink({uri: ENDPOINT,});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

export { client }


