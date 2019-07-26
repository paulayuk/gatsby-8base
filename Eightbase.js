
import { ApolloClient } from 'apollo-boost'
import { ApolloProvider } from "react-apollo";
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { setContext } from 'apollo-link-context';

const AUTH_TOKEN = '97144998-e3ec-44f9-ae25-68a898f76f73';
const ENDPOINT = 'https://api.8base.com/cjyg9ed20000201mr6n1vcqcb';

const httpLink = createHttpLink({uri: ENDPOINT,});
// const authLink = setContext((_, { headers }) => {
// // return the headers to the context so httpLink can read them
// return {
//   headers: {
//     ...headers,
//     // place token in authorization
//     authorization: AUTH_TOKEN ? `Bearer ${AUTH_TOKEN}` : "",
//   }
// }
// });

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

export { client }


