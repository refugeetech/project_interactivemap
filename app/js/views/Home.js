import React from 'react'
import { Link } from 'react-router'

const menuItems = [{
  path: '/work',
  label: 'Work'
},{
  path: '/health',
  label: 'Health'
},{
  path: '/education',
  label: 'Education'
},{
  path: '/health',
  label: 'Health'
},{
  path: '/support',
  label: 'Support'
},{
  path: '/stuff',
  label: 'Stuff'
}]

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