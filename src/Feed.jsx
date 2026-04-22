import React from 'react'
import Stories from './Stories'
import Post from './Post'
function Feed() {
  return (
    <div className="feed-container">
      <div className="stories-wrapper"><Stories/></div>
      <div className="post-wrapper"><Post/></div>
    </div>
  )
}

export default Feed