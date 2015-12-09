import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

class Tabs extends Component {
  constructor(props) {
    super(props)
    this.state= { selected: 1 }
  }
  render() {
    const { selected } = this.state

    return (
      <div style={styles.container}>
        <Link to="/coffee" style={styles.tab} onClick={() => this.setState({ selected: 1 })}>
          <span style={selected === 1 ? styles.active : styles.inactive}>coffee</span>
        </Link>
        <Link to="/water" style={styles.tab} onClick={() => this.setState({ selected: 2 })}>
          <span style={selected === 2 ? styles.active : styles.inactive}>water</span>
        </Link>
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
  },
  active: {
    color: 'black',
    fontSize: '1.2em'
  },
  inactive: {
    color: 'grey'
  }
}

export default Tabs
