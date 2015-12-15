import React, { Component } from 'react'
import Nav from '../components/Nav'

class App extends Component {
  render() {
    const { recipe, actions } = this.props
    const links = [
      { to: '/coffee', label: 'coffee' },
      { to: '/water', label: 'water' },
      { to: '/timer', label: 'timer' }
    ]

    return (
      <div style={styles.container}>
        <div style={styles.content}>
          {this.props.children}
        </div>
        <div style={styles.footer}>
          <Nav links={links} />
        </div>
      </div>
    )
  }
}

const styles = {
  container: {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'stretch'
  },
  content: {
    order: 1,
    height: '88%',
  },
  footer: {
    order: 2,
    height: '12%',
  }
}

export default App
