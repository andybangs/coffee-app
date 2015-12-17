import React, { Component } from 'react'
import Header from '../components/Header'
import Nav from '../components/Nav'

class App extends Component {
  render() {
    const links = [
      { to: '/coffee', label: 'coffee' },
      { to: '/water', label: 'water' },
      { to: '/timer', label: 'timer' }
    ]

    return (
      <div style={styles.container}>
        <div style={styles.header}>
          <Header />
        </div>
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
  header: {
    order: 1,
    height: '5%',
  },
  content: {
    order: 2,
    height: '85%',
  },
  footer: {
    order: 3,
    height: '10%',
  }
}

export default App
