import React from 'react'
import { Link } from 'react-router'

const Home = ({
  sections
}) =>
  <div style={{padding: '1rem 0 ', textAlign: 'center', background: 'white', minHeight: '100vh'}}>
    <h1 style={{margin: '0 0 1rem'}}>Welcome to Sweden</h1>

    <ul style={{
      display: 'flex',
      flexWrap: 'wrap',
      textAlign: 'center',
      justifyContent: 'center'}}
    >
      {Object.values(sections).map((section, i) =>
        <li key={i} style={{margin: '0 1rem 2rem'}}>
          <SectionLink {...section} />
        </li>
      )}
    </ul>

  </div>

const Image = ({ radius, url }) =>
  <div style={{
    width: radius,
    height: radius,
    margin: '0 auto 0.6rem',
    borderRadius: '100%',
    background: `url(${url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundColor: '#eee'
  }} />

const SectionLink = ({ id, title, image }) =>
  <Link to={String(id)} style={{textDecoration: 'none'}}>
    <Image radius="7rem" url={image.url} />
    <div style={{color: '#333', fontSize: '0.9rem'}}>
      {title}
    </div>
  </Link>

export default Home