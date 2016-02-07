import React from 'react'
import {Link} from 'react-router'

const NavBar = ({
  title
}) =>
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

export default NavBar
