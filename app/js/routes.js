import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './App'
import Home from './views/Home'
import Section from './views/Section'
import Post from './views/Post'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/:sectionId" component={Section} />
    <Route path="/posts/:id" component={Post} />
  </Route>
)
