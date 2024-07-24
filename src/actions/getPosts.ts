"use server";

import gql from "graphql-tag";
import client from "@/lib/apollo-client";

export async function getPosts() {
  const { data } = await client.query({
    query: gql`
      query FeedQuery {
        feed {
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
  });
  return data;
}

export async function getDraftPosts() {
  const {
    data: { drafts },
  } = await client.query({
    query: gql`
      query DraftsQuery {
        drafts {
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
  });
  return drafts;
}
