import React, { Component } from 'react'
import Header from '../components/Header'
import Nav from '../components/Nav'

class App extends Component {
  render() {
    const links = [
      { to: '/coffee', label: <i className="fa fa-coffee"></i> },
      { to: '/water', label: <i className="fa fa-tint"></i> },
      { to: '/timer', label: <i className="fa fa-clock-o"></i> }
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
    height: '9%',
  },
  content: {
    order: 2,
    height: '82%',
  },
  footer: {
    order: 3,
    height: '9%',
  }
}

export default App
