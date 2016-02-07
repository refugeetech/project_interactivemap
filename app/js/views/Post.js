import React from 'react'
import { mapProps } from 'recompose'
import { Link } from 'react-router'

const enhance = mapProps(({ posts, ...props }) => ({
  post: posts[props.params.id],
  ...props
}))

const Post = ({ post, params }) =>
  <div className="post">
    <div style={{
      padding: '1rem',
      background: 'white',
      fontFamily: 'Open Sans',
      fontSize: '0.85rem',
      boxShadow: '0 0.1rem 0.4rem rgba(0,0,0,0.25)'}}
    >
      <Link to="/" style={{
        textDecoration: 'none',
        color: '#999'}}
      >
        &larr; Back
      </Link>
    </div>

    <img
      src={post.image.url}
      style={{width: '100%'}} />

    <div style={{padding: '0 1rem'}}>
      <h1 style={{marginBottom: '0'}}>{post.title}</h1>
      <div dangerouslySetInnerHTML={{__html: post.text}} />
    </div>

    {params.n &&
      <div style={{textAlign: 'right'}}>
        <NextButton postId={n} />
      </div>
    }
  </div>


const NextButton = ({ postId }) =>
  <Link to={`/posts/${postId}`} style={{
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