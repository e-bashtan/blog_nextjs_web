"use server";

import gql from "graphql-tag";
import client from "@/lib/apollo-client";

export async function publishPost(id: number) {
  await client.mutate({
    mutation: gql`
      mutation PublishMutation($id: Int!) {
        togglePublishPost(id: $id) {
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
