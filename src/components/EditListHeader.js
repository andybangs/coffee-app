import React from 'react'
import { PropTypes } from 'react-router'

const EditListHeader = (props, context) => {
    const { history } = context

    return (
      <div style={styles.container}>
        <a style={styles.edge} onClick={() => history.replaceState(null, 'list')}>
          <i className="fa fa-chevron-left"></i>
        </a>
        <a style={styles.center}>
          Edit Methods
        </a>
        <a style={styles.edge}>
          <i className="fa fa-plus"></i>
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

EditListHeader.contextTypes = {
  history: PropTypes.history
}

export default EditListHeader
