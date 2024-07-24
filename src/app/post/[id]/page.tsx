"use client"

import { useEffect, useState } from 'react'
import Layout from "@/app/components/layout"
import { PostProps } from "@/app/components/post"
import { getPost } from "@/actions/getPost"
import { publishPost } from "@/actions/publishPost"
import { deletePost } from "@/actions/deletePost"
import { useRouter, useParams } from 'next/navigation'

const Post: React.FC = () => {
  const router = useRouter()
  const params = useParams<{ id: string }>()
  const id = parseInt(params.id!)

  const [post, setPost] = useState<PostProps>()
  useEffect(() => {
    const fetchData = async () => {
      const data = await getPost(id)
      setPost(data);
    }

    fetchData()
  }, [])

  let title = post?.title
  if (!post?.published) {
    title = `${title} (Draft)`
  }

  if (!id) {
    return <div>Invalid ID</div>
  }

  const authorName = post?.author ? post?.author.name : "Unknown author"
  return (
    <Layout>
      <div>
        <h2>{title}</h2>
        <p>By {authorName}</p>
        <p>{post?.content}</p>
        {!post?.published && (
          <button
            onClick={async e => {
              await publishPost(id)
              router.push("/")
            }}
          >
            Publish
          </button>
        )}
        <button
          onClick={async e => {
            await deletePost(id)
            router.push("/")
          }}
        >
          Delete
        </button>
      </div>
      <style jsx>{`
        .page {
          background: white;
          padding: 2rem;
        }

        .actions {
          margin-top: 2rem;
        }

        button {
          background: #ececec;
          border: 0;
          border-radius: 0.125rem;
          padding: 1rem 2rem;
        }

        button + button {
          margin-left: 1rem;
        }
      `}</style>
    </Layout >
  )
}

export default Post
