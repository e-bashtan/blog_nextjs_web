import { ApolloClient, InMemoryCache } from "@apollo/client"

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
})

// client
//   .query({
//     query: gql`
//       query AllUsers {
//         allUsers {
//           email
//           name
//         }
//       }
//     `,
//   })
//   .then(result => console.log("client res!", result))

export default client
