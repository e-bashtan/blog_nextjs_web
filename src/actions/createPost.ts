"use server";

import gql from "graphql-tag";
import client from "@/lib/apollo-client";

export async function createPost(
  title: string,
  content: string,
  authorEmail: string
) {
  const {
    data: { postById },
  } = await client.mutate({
    mutation: gql`
      mutation CreateDraftMutation(
        $data: PostCreateInput!
        $authorEmail: String!
      ) {
        createDraft(data: $data, authorEmail: $authorEmail) {
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
      data: { title, content },
      authorEmail,
    },
  });

  return postById;
}
