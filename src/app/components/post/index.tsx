"use client"

import React from 'react'
import ReactMarkdown from 'react-markdown'

import { useRouter } from 'next/navigation'

export type PostProps = {
  id: number;
  title: string;
  author: {
    name: string;
  }
  content: string;
  published: boolean;
}

const Post: React.FC<{ post: PostProps }> = ({ post }) => {
  const authorName = post.author ? post.author.name : 'Unknown author'
  const router = useRouter()


  const handleClick = (e) => {
    e.preventDefault()
    router.push(`/post/${post.id}`)
  }

  return (
    <div onClick={handleClick}>
      <h2>{post.title}</h2>
      <small>By {authorName}</small>
      <ReactMarkdown children={post?.content} />
      <style jsx>{`
          div {
            color: inherit;
            padding: 2rem;
          }
        `}</style>
    </div>
  )
}

export default Post