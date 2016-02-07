import React from 'react'
import {Link} from 'react-router'

const NavBar = ({
  title, showBackLink
}) =>
  <div style={{
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    padding: '1rem',
    background: 'white',
    fontFamily: 'Open Sans',
    fontSize: '0.85rem',
    boxShadow: '0 0.1rem 0.4rem rgba(0,0,0,0.25)'}}
  >
    <div style={{
      display: 'flex',
      justifyContent: 'space-between'
    }}>
    <Link to="/" style={{
      textDecoration: 'none',
      color: '#999',
      flex: '1',
      display: showBackLink
    }}
    >
      &larr; Back
    </Link>

    <span style={{
      textAlign: 'center'
    }}>
      { title }
    </span>
    <div style={{ flex: '1' }} />
</div>
  </div>

export default NavBar
