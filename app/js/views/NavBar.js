import React from 'react'
import {Link} from 'react-router'

const NavBar = ({
  title,
  showBackLink,
  children
}) =>
  <div style={{
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    padding: '1rem',
    background: '#0e6ca5',
    fontFamily: 'Open Sans',
    fontWeight: '500',
    fontSize: '0.85rem',
    boxShadow: '0 0.1rem 0.4rem rgba(0,0,0,0.25)'}}
  >
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <Link to="/" style={{
        textDecoration: 'none',
        color: '#fff',
        flex: '1',
        display: showBackLink
      }}
      >
        &larr; Back
      </Link>

      <span style={{
        textAlign: 'center',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        maxWidth: '50vw',
        fontWeight: '600',
        color: '#fff'
      }}>
        { title }
      </span>

      <div style={{ flex: '1', textAlign: 'right' }} >
        {children || <span>🇸🇪</span>}
      </div>

    </div>
  </div>

export default NavBar
