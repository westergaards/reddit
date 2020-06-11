import React from 'react'
import './Post.css'

export const Post = ({ id, title, author, ups, url }) => {
  return (
    <div key={id} className="post">
      <a href={url} target="_blank" rel="noreferrer">
        <div className="title">{title}</div>
      </a>
      <div className="author-container">
        <div className="author">{author}</div>
        <div className="ups">{ups}</div>
      </div>
    </div>
  )
}
