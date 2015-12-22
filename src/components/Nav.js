import React from 'react'
import { PropTypes } from 'react-router'

const Nav = (props, context) => {
  const tabs = props.links.map((link, key) => {
    return (
      <span key={key} style={styles.link}>
        <a
          style={context.history.isActive(link.to) ? styles.active : styles.inactive}
          onClick={() => context.history.replaceState(null, link.to)}
        >
          {link.label}
        </a>
      </span>
    )
  })

  return (
    <div style={styles.container}>
      {tabs}
    </div>
  )
}

Nav.propTypes = {
  links: React.PropTypes.array.isRequired
}

Nav.contextTypes = {
  history: PropTypes.history
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
    color: 'black',
    fontSize: 25,
    textAlign: 'center'
  },
  active: {
    color: 'black',
    fontSize: '1.2em',
    textDecoration: 'none',
    cursor: 'pointer'
  },
  inactive: {
    color: 'grey',
    textDecoration: 'none',
    cursor: 'pointer'
  }
}

export default Nav
