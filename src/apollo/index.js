import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'

// HTTP connection to the API
const httpLink = createHttpLink({
  uri: 'https://ortosoft.hasura.app/v1/graphql',
  credentials: 'same-origin',
  headers: {
    'x-hasura-admin-secret': '6lgNTdmc47yx71b6JxRvXBjT86Cq0KmF5xzaYntQaEetV1zDLjhlL5bUDSiotrkk',
  },
})

// Cache implementation
const cache = new InMemoryCache()

// Create the apollo client
export const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
  connectToDevTools: true,
  wsEndpoint: 'ws://ortosoft.hasura.app/v1/graphql',
})
