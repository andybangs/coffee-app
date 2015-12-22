import React from 'react'
import { PropTypes } from 'react-router'

const ListHeader = (props, context) => {
  const { history } = context

  return (
    <div style={styles.container}>
      <a style={styles.edge} onClick={() => history.goBack()}>
        <i className="fa fa-chevron-left"></i>
      </a>
      <a style={styles.center}>
        Brew Methods
      </a>
      <a style={styles.edge} onClick={() => history.replaceState(null, 'editlist')}>
        <i className="fa fa-cog"></i>
      </a>
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    flexFlow: 'row',
    justifyContent: 'center'
  },
  center: {
    flex: 3,
    alignSelf: 'center',
    cursor: 'pointer',
    textDecoration: 'none',
    color: 'black',
    fontSize: 25,
    textAlign: 'center'
  },
  edge: {
    flex: 1,
    alignSelf: 'center',
    cursor: 'pointer',
    textDecoration: 'none',
    color: 'black',
    textAlign: 'center'
  }
}

ListHeader.contextTypes = {
  history: PropTypes.history
}

export default ListHeader
