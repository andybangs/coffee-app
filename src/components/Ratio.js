import React, { Component, PropTypes } from 'react'

class Ratio extends Component {
  render() {
    const { value, inc, dec } = this.props

    return (
      <div style={styles.container}>
        <span style={styles.operator} onClick={dec}>-</span>
        {' '}
        <a style={styles.value}>1:{value}</a>
        {' '}
        <span style={styles.operator} onClick={inc}>+</span>
      </div>
    )
  }
}

Ratio.propTypes = {
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
