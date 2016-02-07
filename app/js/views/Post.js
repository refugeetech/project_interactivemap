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
      <NextButton />
    </div>
  </div>

const NextButton = () =>
  <Link to="/" style={{
    background: '#51DB71',
    borderRadius: '5px',
    color: '#ffffff',
    fontSize: '16px',
    padding: '8px 14px 8px 14px',
    marginRight: '10px',
    textDecoration: 'none'}}
  >
    Next article
  </Link>

export default enhance(Post)