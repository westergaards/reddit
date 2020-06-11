import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Post } from './Post'
import './Posts.css'

// 5 most popular
// least popular
export const Posts = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get('https://www.reddit.com/r/popular.json')

      let responsePosts = response.data.data.children.map((item) => item.data)
      responsePosts = responsePosts.sort((a, b) => (a.ups < b.ups ? 1 : -1))
      let updatedPosts = responsePosts.slice(0, 5)
      const leastPopular = responsePosts[responsePosts.length - 1]

      updatedPosts = [...updatedPosts, leastPopular]

      setPosts(updatedPosts)
    }

    fetchPosts()
  }, [])

  return (
    <div>
      {posts.map(({ id, title, author, ups, url }) => (
        <Post key={id} title={title} author={author} ups={ups} url={url} />
      ))}
    </div>
  )
}
