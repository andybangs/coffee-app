import React, { PropTypes } from 'react'

const Ratio = (props) => {
  const { toBeUpdated, title, value, inc, dec } = props

  return (
    <div style={styles.container}>
      <a style={styles.operator} onClick={() => dec(title, toBeUpdated)}>-</a>
      {' '}
      <a style={styles.value}>1:{value}</a>
      {' '}
      <a style={styles.operator} onClick={() => inc(title, toBeUpdated)}>+</a>
    </div>
  )
}

Ratio.propTypes = {
  toBeUpdated: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  inc: PropTypes.func.isRequired,
  dec: PropTypes.func.isRequired
}

const styles = {
  container: {
    display: 'flex',
    flexFlow: 'row',
    justifyContent: 'center'
  },
  value: {
    flex: 3,
    alignSelf: 'center'
  },
  operator: {
    flex: 1,
    alignSelf: 'center',
    cursor: 'pointer',
    textAlign: 'center'
  }
}

export default Ratio
