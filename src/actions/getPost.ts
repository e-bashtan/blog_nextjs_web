"use server";

import gql from "graphql-tag";
import client from "@/lib/apollo-client";

export async function getPost(id: number) {
  const {
    data: { postById },
  } = await client.query({
    query: gql`
      query PostQuery($id: Int) {
        postById(id: $id) {
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
    variables: { id },
  });

  return postById;
}
