import React from 'react'
import { Link } from 'react-router'

const Home = ({
  sections
}) =>
  <div style={{padding: '0 1rem'}}>
    <h1>Welcome to Sweden</h1>

    <ul>
      {Object.values(sections).map((section, i) =>
        <li key={i}>
          <Link to={String(section.id)}>
            {section.name}
          </Link>
        </li>
      )}
    </ul>

  </div>

export default Home