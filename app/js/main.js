import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import routes from './routes'

require('../css/main.css')

// Create app container if necessary
if (!document.getElementById('app')) {
  const node = document.createElement('div')
  node.id = 'app'
  document.body.appendChild(node)
}

ReactDOM.render(
  <Router history={createBrowserHistory()} routes={routes} />,
  document.getElementById('app')
)
