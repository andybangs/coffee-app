import React, { Component, PropTypes } from 'react'

class Display extends Component {
  render() {
    const { value, inc, dec } = this.props

    return (
      <div style={styles.container}>
        <span style={styles.value}>{value}</span>
      </div>
    )
  }
}

Display.propTypes = {
  value: React.PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired
  ])
}

const styles = {
  container: {
    display: 'flex',
    flexFlow: 'row',
    justifyContent: 'center'
  },
  value: {
    alignSelf: 'center'
  }
}

export default Display
