import React, { Component, PropTypes } from 'react'

class Ratio extends Component {
  constructor(props) {
    super(props)
    
    this.inc = this.inc.bind(this)
    this.dec = this.dec.bind(this)
  }

  inc() {
    this.props.inc(this.props.toBeUpdated)
  }

  dec() {
    this.props.dec(this.props.toBeUpdated)
  }

  render() {
    const { value, inc, dec } = this.props

    return (
      <div style={styles.container}>
        <span style={styles.operator} onClick={this.dec}>-</span>
        {' '}
        <a style={styles.value}>1:{value}</a>
        {' '}
        <span style={styles.operator} onClick={this.inc}>+</span>
      </div>
    )
  }
}

Ratio.propTypes = {
  toBeUpdated: PropTypes.string.isRequired,
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
