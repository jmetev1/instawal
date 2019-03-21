import React from 'react';

const Post = ({ url, comment }) => (
  <div className='post' >
    <div className='comment'>{comment}</div>
    <img 
      src={url} className='image' alt="logo" />
  </div>
)

export default Post 