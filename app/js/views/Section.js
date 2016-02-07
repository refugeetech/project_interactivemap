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
      boxShadow: '0 0.1rem 0.4rem rgba(0,0,0,0.25)'}}
    >
      <Link to="/">Back</Link>
    </div>

    <div style={{padding: '1rem'}}>
      <h2>{section.name}</h2>

      {section.categories.map(id =>
        <Category {...categories[id]} postsById={posts} />
      )}
    </div>

  </div>

const Category = ({ name, posts, postsById }) =>
  <div>
    <h3 style={{margin: '1rem 0 0'}}>
      {name}
    </h3>

    <ul>
      {posts.map(id =>
        <li key={id}>
          <PostLink id={id} {...postsById[id]} />
        </li>
      )}
    </ul>
  </div>

const PostLink = ({ id, title }) =>
  <Link
    to={`/posts/${id}`}
    style={{
      display: 'block',
      padding: '0.4rem 0'
    }}
  >
    {title}
  </Link>

export default enhance(Section)