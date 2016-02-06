import React from 'react'
import { Link } from 'react-router'

const Section = ({ params }) =>
  <div>
    <div style={{
      padding: '1rem',
      boxShadow: '0 0.1rem 0.4rem rgba(0,0,0,0.25)'
    }}
    >
      <Link to="/">Back</Link>
    </div>

    <div style={{padding: '1rem'}}>
      <h2>{params.sectionId}</h2>
    </div>
  </div>

export default Section