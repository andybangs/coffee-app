import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

class App extends Component {
  render() {
    const { recipe, actions } = this.props
    return (
      <div style={styles.container}>
        <div style={styles.content}>
          {this.props.children}
        </div>
        <div style={styles.footer}>
          <div style={styles.tabsContainer}>
            <Link to="/coffee" style={styles.tab}>coffee</Link>
            <Link to="/water" style={styles.tab} >water</Link>
          </div>
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
  },
  tabsContainer: {
    display: 'flex',
    flexFlow: 'row',
    justifyContent: 'center'
  },
  tab: {
    flex: 1,
    alignSelf: 'center',
    cursor: 'pointer',
    textDecoration: 'none',
    color: 'black',
    fontSize: 25,
    textAlign: 'center'
  }
}

export default App
