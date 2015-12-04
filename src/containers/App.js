import React, { Component, PropTypes } from 'react'
import Tabs from '../components/Tabs'

class App extends Component {
  render() {
    const { recipe, actions } = this.props
    return (
      <div style={styles.container}>
        <div style={styles.content}>
          {this.props.children}
        </div>
        <div style={styles.footer}>
          <Tabs />
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
