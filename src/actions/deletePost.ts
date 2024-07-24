"use server";

import gql from "graphql-tag";
import client from "@/lib/apollo-client";

export async function deletePost(id: number) {
  await client.mutate({
    mutation: gql`
      mutation DeleteMutation($id: Int!) {
        deletePost(id: $id) {
          id
          title
          content
          published
          author {
            id
            name
          }
        }
      }
    `,
    variables: {
      id,
    },
  });
}
