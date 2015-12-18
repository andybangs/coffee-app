import React, { PropTypes } from 'react'
import { Link } from 'react-router'

const Nav = (props) => {
  const tabs = props.links.map((link, key) => {
    return (
      <span key={key} style={styles.link}>
        <Link to={link.to} style={styles.inactive} activeStyle={styles.active}>{link.label}</Link>
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
    color: 'black',
    fontSize: 25,
    textAlign: 'center'
  },
  active: {
    color: 'black',
    fontSize: '1.2em',
    textDecoration: 'none'
  },
  inactive: {
    color: 'grey',
    textDecoration: 'none'
  }
}

export default Nav
