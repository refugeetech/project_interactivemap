import React from 'react'
import { mapProps } from 'recompose'
import { Link } from 'react-router'
import NavBar from './NavBar'


const enhance = mapProps(({ posts, ...props }) => ({
  post: posts[props.params.id],
  ...props
}))

const Post = ({ post, params, onReadPost }) =>
  <div className="post" style={{paddingTop: '53px'}}>
    <NavBar title={post.title} />

    <img
      src={post.image.url}
      style={{width: '100%'}} />

    <div style={{padding: '0 1rem'}}>
      <h1 style={{marginBottom: '0'}}>{post.title}</h1>
      <div dangerouslySetInnerHTML={{__html: post.text}} />
    </div>

    <div style={{textAlign: 'center', padding: '0 0 4rem'}}>
      <button
        onClick={() => {
          onReadPost(post.id)
          window.history.back()
        }}
        style={{
          color: 'white',
          background: '#00ab6b',
          borderRadius: '1.4rem',
          fontFamily: 'Open Sans',
          fontSize: '0.85rem',
          lineHeight: '1',
          padding: '0.7rem 1rem'}}
      >
        Mark as read
      </button>
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
