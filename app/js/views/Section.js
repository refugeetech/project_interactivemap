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
        <Category
          key={id}
          {...categories[id]}
          postsById={posts} />
      )}
    </div>

  </div>

const Category = ({ name, posts, postsById }) =>
  <div>
    <h3 style={{margin: '1rem 0 0'}}>
      {name}
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

const PostLink = ({ id, title, nextId }) =>
  <Link
    to={buildUrl(id, nextId)}
    style={{
      display: 'block',
      padding: '0.4rem 0'
    }}
  >
    {title}
  </Link>

export default enhance(Section)