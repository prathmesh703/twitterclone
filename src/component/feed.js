import React from 'react'
import Post from './Post'
import Tweet from './Tweet'

const Feed = () => {
  return (
    <div className=' border boder-gray-200 w-[40%] '>
      <div  >
        <Post />
        <Tweet/>
        <Tweet/>
        <Tweet/>
      </div>
    </div>
  )
}

export default Feed