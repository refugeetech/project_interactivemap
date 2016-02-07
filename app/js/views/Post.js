import React from 'react'
import { mapProps } from 'recompose'
import { Link } from 'react-router'

const enhance = mapProps(({ posts, params, ...props }) => ({
  post: posts[params.id],
  ...props
}))

const Post = ({ post }) =>
  <div>
    <div style={{
      padding: '1rem',
      boxShadow: '0 0.1rem 0.4rem rgba(0,0,0,0.25)'}}
    >
      <Link to="/">Back</Link>
    </div>

    <img
      src={post.image.image.url}
      style={{width: '100%'}} />

    <div style={{padding: '1rem'}}>
      <h2>{post.title}</h2>
      <div>{post.text}</div>
    </div>

    <div style={{textAlign: 'right'}}>
      <button onClick={() => alert('Just kiddin\'n ;)')} style={{
        background: '#ababab',
        borderRadius: '5px',
        color: '#ffffff',
        fontSize: '20px',
        padding: '10px 10px 10px 10px',
        marginRight: '10px'}}
      >
        Next article
      </button>
    </div>
  </div>

export default enhance(Post)