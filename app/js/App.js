import { normalize, arrayOf } from 'normalizr'
import React, { cloneElement, Component } from 'react'
import request from './utils/request'
import { section } from './schemas'

class App extends Component {

  constructor(...args) {
    super(...args)
    this.state = {}
  }

  componentDidMount() {
    request('sections')
      .then(body => normalize(body, {
        sections: arrayOf(section)
      }))
      .then(res => this.setState(res.entities))
  }

  render() {
    if (!this.state.sections)
      return <Loader />

    return cloneElement(this.props.children, this.state)
  }
}

const Loader = () =>
  <div style={{
    padding: '2rem 1rem',
    textAlign: 'center'}}
  >
    Loading...
  </div>

export default App