import React, { Component, PropTypes } from 'react'

class Ratio extends Component {
  constructor(props) {
    super(props)

    this.inc = this.inc.bind(this)
    this.dec = this.dec.bind(this)
  }

  inc() {
    this.props.inc(this.props.title, this.props.toBeUpdated)
  }

  dec() {
    this.props.dec(this.props.title, this.props.toBeUpdated)
  }

  render() {
    const { value, inc, dec } = this.props

    return (
      <div style={styles.container}>
        <a style={styles.operator} onClick={this.dec}>-</a>
        {' '}
        <a style={styles.value}>1:{value}</a>
        {' '}
        <a style={styles.operator} onClick={this.inc}>+</a>
      </div>
    )
  }
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
