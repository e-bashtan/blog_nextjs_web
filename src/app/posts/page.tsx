"use client"

import { useEffect, useState } from 'react'
import Layout from "@/app/components/layout"
import Post, { PostProps } from "@/app/components/post"
import { getPosts } from '@/actions/getPosts'

const Posts: React.FC<{ data: { feed: PostProps[] } }> = (props) => {

  const [posts, setPosts] = useState()
  useEffect(() => {
    const fetchData = async () => {
      const posts = await getPosts()
      setPosts(posts);
    }

    fetchData()
  }, [])

  return (
    <Layout>
      <div className="page">
        <h1>My Blog</h1>
        <main>
          {posts?.feed?.map(post => (
            <div key={post.id} className="post">
              <Post post={post} />
            </div>
          ))}
        </main>
      </div>
      <style jsx>{`
        .post {
          background: white;
          transition: box-shadow 0.1s ease-in;
        }

        .post:hover {
          box-shadow: 1px 1px 3px #aaa;
        }

        .post + .post {
          margin-top: 2rem;
        }
      `}</style>
    </Layout>
  )
}

export default Posts
