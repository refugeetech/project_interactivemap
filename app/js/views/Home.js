import React from 'react'
import { Link } from 'react-router'

const Home = ({
  sections
}) =>
  <div style={{padding: '0 1rem', textAlign: 'center'}}>
    <h1>Welcome to Sweden</h1>

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

const Circle = ({ radius }) =>
  <div style={{
    width: radius,
    height: radius,
    border: '3px solid #eee',
    margin: '0 auto 0.6rem',
    borderRadius: '100%'
  }} />

const SectionLink = ({ id, title }) =>
  <Link to={String(id)} style={{textDecoration: 'none'}}>
    <Circle radius="7rem" />
    <div style={{color: '#333', fontSize: '0.9rem'}}>
      {title}
    </div>
  </Link>

export default Home