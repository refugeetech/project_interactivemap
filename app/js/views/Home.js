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

const Home = ({ children }) =>
  <div style={{padding: '0 1rem'}}>
    <h1>Welcome to Sweden</h1>

    <ul>
      {menuItems.map((item, i) =>
        <li key={i}>
          <Link to={item.path}>{item.label}</Link>
        </li>
      )}
    </ul>

    {children}
  </div>

export default Home