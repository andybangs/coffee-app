/*
  --Difference between Nav & EditNav--
  Nav: Link is used to add navigation to history
  EditNav: history.replaceState is used to replace state without adding to length of history
*/

import React from 'react'
import { PropTypes } from 'react-router'

const EditNav = (props, context) => {
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

EditNav.propTypes = {
  links: React.PropTypes.array.isRequired
}

EditNav.contextTypes = {
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

export default EditNav
