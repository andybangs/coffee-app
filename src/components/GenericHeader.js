import React, { PropTypes } from 'react'

const GenericHeader = (props, context) => {
    return (
      <div style={styles.container}>
        <a style={styles.edge}>
          {props.leftLink}
        </a>
        <a style={styles.center}>
          {props.title}
        </a>
        <a style={styles.edge}>
          {props.rightLink}
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

GenericHeader.propTypes ={
  title: PropTypes.string.isRequired,
  leftLink: PropTypes.object.isRequired,
  rightLink: PropTypes.object.isRequired
}

export default GenericHeader
