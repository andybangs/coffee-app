import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

class Tabs extends Component {
  render() {
    return (
      <div style={styles.container}>
        <Link to="/coffee" style={styles.tab}>coffee</Link>
        <Link to="/water" style={styles.tab} >water</Link>
      </div>
    )
  }
}

const styles = {
  container: {
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

export default Tabs
