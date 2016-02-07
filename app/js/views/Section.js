import React from 'react'
import { mapProps } from 'recompose'
import { Link } from 'react-router'

const enhance = mapProps(({ sections, params, ...props }) => ({
  section: sections[params.sectionId],
  ...props
}))

const Section = ({
  section,
  categories,
  posts
}) =>
  <div>
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

    <div>
      <div style={{
        backgroundImage: 'url('+section.image.url+')',
        backgroundSize: 'cover'
      }}>
        <div
        style={{
          padding: '6rem 0 .05rem 0',
          background: 'linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.35))'
        }}>
        <h2 style={{
          fontWeight: '600',
          fontSize: '1.8rem',
          margin: '1rem',
          color: '#ffffff',
          textShadow: '0px 0px 2px #222'
        }}
        >
          {section.title}
        </h2>
        </div>
      </div>

      {section.categories.map(id =>
        <Category
          key={id}
          {...categories[id]}
          postsById={posts} />
      )}
    </div>

  </div>

const Category = ({ title, posts, postsById }) =>
  <div style={{margin: '0 0 1.4rem'}}>
    <h3 style={{
      fontSize: '0.9rem',
      color: '#999',
      padding: '0.6rem 1rem',
      margin: 0,
      borderBottom: '1px solid #e5e5e5'}}
    >
      {title}
    </h3>

    <ul>
      {posts.map((id, i) =>
        <li key={id}>
          <PostLink
            id={id}
            nextId={posts[i + 1]}
            {...postsById[id]} />
        </li>
      )}
    </ul>
  </div>

const buildUrl = (id, next) =>
  next ?
    `/posts/${id}?n=${next}` :
    `/posts/${id}`

const PostLink = ({ id, title, text, nextId }) =>
  <Link
    to={buildUrl(id, nextId)}
    style={{
      display: 'block',
      padding: '0.6rem 1rem',
      textDecoration: 'none',
      color: '#333',
      background: 'white',
      borderBottom: '1px solid #e5e5e5'}}
  >
    {title}
    {/*<div
      dangerouslySetInnerHTML={{__html: text}}
      style={{
        color: '#999',
        fontSize: '0.9rem',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'}} />*/}
  </Link>

export default enhance(Section)
