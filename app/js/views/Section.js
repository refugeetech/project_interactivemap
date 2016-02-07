import React from 'react'
import { compose, mapProps } from 'recompose'
import { Link } from 'react-router'
import NavBar from './NavBar'

const enhance = compose(
  mapProps(({ sections, params, ...props }) => ({
    section: sections[params.sectionId],
    ...props
  })),
  mapProps(({ section, readPosts, ...props }) => {
    const readPostsInCategory = section.categories
      .map(id => props.categories[id])
      .reduce((acc, c) => acc.concat(c.posts), [])
      .filter(id => readPosts.includes(id))

    const categoryPosts = section.categories
      .map(id => props.categories[id])
      .reduce((acc, c) => acc.concat(c.posts), [])

    return {
      section,
      readCount: readPostsInCategory.length,
      postCount: categoryPosts.length,
      readPosts,
      ...props
    }
  }),
)

const Section = ({
  section,
  categories,
  posts,
  readCount,
  postCount,
  readPosts
}) =>
  <div style={{paddingTop: '53px'}}>
    <NavBar title={section.title}>
      <div style={{fontSize: '0.8rem', color: 'white'}}>
        {readCount} of {postCount} done
      </div>
    </NavBar>

    <div>
      <div style={{
        backgroundImage: 'url('+section.image.url+')',
        backgroundSize: 'cover'
      }}>
        <div
        style={{
          padding: '6rem 0 .05rem 0',
          background: 'linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.3))'
        }}>
        <h2 style={{
          fontWeight: '600',
          fontSize: '1.8rem',
          margin: '1rem',
          color: '#ffffff',
          textShadow: '1px 1px 2px #444'
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
          postsById={posts}
          readPosts={readPosts} />
      )}
    </div>

  </div>

const Category = ({ title, posts, postsById, readPosts }) =>
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
            isRead={readPosts.includes(id)}
            {...postsById[id]} />
        </li>
      )}
    </ul>


  </div>

const buildUrl = (id, next) =>
  next ?
    `/posts/${id}?n=${next}` :
    `/posts/${id}`

const PostLink = ({ id, title, text, nextId, isRead }) =>
  <Link
    to={buildUrl(id, nextId)}
    style={{
      display: 'block',
      padding: '0.6rem 1rem',
      textDecoration: isRead ? 'line-through' : 'none',
      color: isRead ? '#999' : '#333',
      background: 'white',
      borderBottom: '1px solid #e5e5e5'}}
  >
    {title}
  </Link>

export default enhance(Section)
