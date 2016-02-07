import { normalize, arrayOf } from 'normalizr'
import React, { cloneElement, Component } from 'react'
import { compose, mapProps, withState } from 'recompose'
import request from './utils/request'
import { section } from './schemas'

const enhance = compose(
  withState('readPosts', 'setRead', () => JSON.parse(localStorage.getItem('readPosts')) || []),
  mapProps(({ setRead, ...props }) => ({
    onReadPost: id => {
      setRead(ids => {
        console.log('here', ids, id)
        if (ids.includes(id)) return ids
        console.log('heres')
        const newIds = ids.concat(id)
        localStorage.setItem('readPosts', JSON.stringify(newIds))
        return newIds
      })
    },
    ...props
  }))
)

class App extends Component {

  constructor(...args) {
    super(...args)
    this.state = {}
  }

  componentDidMount() {
    request('sections')
      .then(body => normalize(body, arrayOf(section)))
      .then(res => this.setState(res.entities))
  }

  render() {
    if (!this.state.sections)
      return <Loader />

    console.log(this.state)
    return cloneElement(this.props.children, { ...this.state, ...this.props })
  }
}

const Loader = () =>
  <div style={{
    padding: '2rem 1rem',
    textAlign: 'center'}}
  >
    Loading...
  </div>

export default enhance(App)