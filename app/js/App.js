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
    return (
      <div>
        {cloneElement(this.props.children, { ...this.state, ...this.props })}
      <footer style={{ textAlign: 'center', padding: '1rem 0', fontSize: '0.85rem', color: '#999' }}>
        Made with love in
        <span style={{fontSize: '1.2rem', position: 'relative', left: '5px', top: '3px'}}>🇸🇪</span>
      </footer>
      </div>
    )}
}

const Loader = () =>
  <div style={{
    padding: '2rem 1rem',
    textAlign: 'center'}}
  >
    Loading...
  </div>

export default enhance(App)
