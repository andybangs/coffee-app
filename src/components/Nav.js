import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

class Nav extends Component {
  constructor(props) {
    super(props)

    this.state = { selected: 0 }
  }

  render() {
    const { links } = this.props
    const { selected } = this.state
    const tabs = links.map((link, key) => {
      return (
        <Link key={key} to={link.to} style={styles.link} onClick={() => this.setState({ selected: key })}>
          <span style={selected === key ? styles.active : styles.inactive}>{link.label}</span>
        </Link>
      )
    })

    return (
      <div style={styles.container}>
        {tabs}
      </div>
    )
  }
}

Nav.propTypes = {
  links: PropTypes.array.isRequired
}

const styles = {
  container: {
    display: 'flex',
    flexFlow: 'row',
    justifyContent: 'center'
  },
  link: {
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

export default Nav
