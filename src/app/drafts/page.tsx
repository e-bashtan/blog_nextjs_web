"use client"

import { useEffect, useState } from 'react'
import Layout from "@/app/components/layout"
import { getDraftPosts } from '@/actions/getPosts'
import Post from "@/app/components/post"


const Drafts: React.FC<> = (props) => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const posts = await getDraftPosts()
      setPosts(posts);
    }

    fetchData()
  }, [])

  return (
    <Layout>
      <div className="page">
        <h1>Drafts</h1>
        <main>
          {posts?.length > 0 ? posts.map((post) => (
            <div key={post.id} className="post">
              <Post post={post} />
            </div>
          )) : <>None</>}
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

export default Drafts
